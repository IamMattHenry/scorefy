"use client"

import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart,
  Shuffle,
  Repeat,
  Home,
  Search,
  User,
  Users,
  Music,
  Clock,
  Ear
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AudiusSdk } from "@audius/sdk";

export default function MusicPlayerPage() {
  // Player state management
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isLiked, setIsLiked] = useState<{ [id: string]: boolean }>({});
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Track interface for TypeScript
  interface Track {
    id: string;
    title: string;
    artist: string;
    duration: string;
    plays: number;
    artwork: string;
    streamUrl: string;
  }

  // Format duration helper
  function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  // Fetch tracks from Audius API
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/tracks/trending');
        const data = await res.json();

        const mappedTracks: Track[] = data.data.map((track: any) => ({
          id: track.id,
          title: track.title,
          artist: track.user?.name ?? "Unknown Artist",
          duration: formatDuration(track.duration),
          plays: track.playCount,
          artwork: track.artwork?._150x150 || "",
          streamUrl: `https://discoveryprovider.audius.co/v1/tracks/${track.id}/stream`
        }));

        setTracks(mappedTracks);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  // Get current track
  const currentTrack = tracks[currentTrackIndex] || {
    id: '',
    title: "No Track Selected",
    artist: "Unknown Artist",
    duration: "0:00",
    plays: 0,
    artwork: "",
    streamUrl: ""
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Auto-play next track when current track ends
      playNextTrack();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks]);

  // Play specific track
  const playTrack = async (trackIndex: number) => {
    const audio = audioRef.current;
    if (!audio || !tracks[trackIndex]) return;

    try {
      // Set the current track
      setCurrentTrackIndex(trackIndex);
      
      // Update audio source
      audio.src = tracks[trackIndex].streamUrl;
      
      // Play the track
      await audio.play();
      setIsPlaying(true);
      
      // Log the play for gamification (future feature)
      console.log(`🎵 Playing: ${tracks[trackIndex].title} by ${tracks[trackIndex].artist}`);
      
    } catch (error) {
      console.error('Failed to play track:', error);
      setIsPlaying(false);
    }
  };

  // Toggle play/pause for current track
  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // If no track is loaded, play the first track
        if (!currentTrack.streamUrl && tracks.length > 0) {
          await playTrack(0);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Failed to toggle playback:', error);
      setIsPlaying(false);
    }
  };

  // Play next track
  const playNextTrack = () => {
    if (tracks.length === 0) return;
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(nextIndex);
  };

  // Play previous track
  const playPreviousTrack = () => {
    if (tracks.length === 0) return;
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    playTrack(prevIndex);
  };

  //Log liked tracks
  const likedTracks = tracks
    .filter(track => isLiked[track.id])
    .map(track => track.title)
    console.log("Liked tracks: ", likedTracks.join(","))

  // Set liked track
  const handleLike = (trackId: string) => {
    if (trackId && !isLiked[trackId]) {
      setIsLiked(prev => ({ ...prev, [trackId]: true }));
      console.log(trackId + "is liked");
    } else if (isLiked[trackId]) {
      // If already liked, unlike it
      setIsLiked(prev => ({ ...prev, [trackId]: false }));
      console.log(trackId + "is disliked");
    }
  }

  // Seek functionality
  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    
    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Volume control
  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = value[0];
    setVolume(newVolume);
    audio.volume = newVolume / 100;
  }

  // Format time helper
  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
              
  return (
    <div className="min-h-screen font-blinker bg-[linear-gradient(to_bottom_right,_#030A00_0%,_#091E01_50%,_#030A00_100%)]">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        preload="metadata"
        crossOrigin="anonymous"
      />
      
      <div className="flex h-screen">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-[#172419] p-6 flex flex-col">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2 text-white mb-8">
            <Ear className="h-8 w-8" />
            <h1 className="text-2xl font-bold font-anton">Scorefy</h1>
          </Link>

          {/* Navigation Menu */}
          <nav className="space-y-4 flex-1">
            <Link 
              href="/dashboard" 
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/30"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            
            <Link 
              href="/search" 
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/30"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </Link>
            
            <Link 
              href="/profile" 
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/30"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            
            <Link 
              href="/community" 
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/30"
            >
              <Users className="w-5 h-5" />
              <span>Community</span>
            </Link>
          </nav>

          {/* User Stats in Sidebar */}
          <div className="mt-auto pt-6 border-t border-gray-700/30">
            <div className="text-white/70 text-sm">
              <p>Level 4 • 4444 XP</p>
              <p className="text-green-500">4-Day Streak 🔥</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="p-6 border-b border-gray-700/30">
            <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            <p className="text-white/70 mt-1">Discover the hottest tracks from Audius</p>
          </header>

          {/* Content Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            {loading ? (
              /* Loading State */
              <div className="flex items-center justify-center h-64">
                <div className="text-white text-lg">Loading tracks...</div>
              </div>
            ) : (
              /* Trending Tracks List */
              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <div 
                    key={track.id}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors cursor-pointer group ${
                      currentTrackIndex === index 
                        ? 'bg-green-600/20 border border-green-600/30' 
                        : 'bg-gray-800/20 hover:bg-gray-800/40'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Track Number / Play Button */}
                      <div className="w-6 flex items-center justify-center">
                        {currentTrackIndex === index && isPlaying ? (
                          <Button 
                            size="sm" 
                            className="w-6 h-6 p-0 bg-green-600 hover:bg-green-700"
                            onClick={togglePlayPause}
                          >
                            <Pause className="w-3 h-3" />
                          </Button>
                        ) : (
                          <>
                            <span className="text-white/50 text-center group-hover:hidden">
                              {index + 1}
                            </span>
                            <Button 
                              size="sm" 
                              className="w-6 h-6 p-0 bg-green-600 hover:bg-green-700 hidden group-hover:flex items-center justify-center"
                              onClick={() => playTrack(index)}
                            >
                              <Play className="w-3 h-3" />
                            </Button>
                          </>
                        )}
                      </div>
                      
                      {/* Track Info */}
                      <div className="flex items-center space-x-3">
                        {/* Track Artwork */}
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-600 flex items-center justify-center">
                          {track.artwork ? (
                            <img 
                              src={track.artwork} 
                              alt={track.title} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to music icon if image fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <Music className="w-6 h-6 text-white/70" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium truncate max-w-xs">
                            {track.title}
                          </p>
                          <p className="text-white/70 text-sm truncate max-w-xs">
                            {track.artist}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <span className="text-white/50 text-sm">
                        {track.plays.toLocaleString()} plays
                      </span>
                      <span className="text-white/50 text-sm">{track.duration}</span>
                      <Button 
                        variant="link" 
                        size="sm"
                        onClick={() => handleLike(track.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className={`w-4 h-4 ${isLiked[track.id] ? 'text-red-500' : 'text-white/70'}`} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Now Playing Bar - Fixed at Bottom */}
          <div className="bg-[#172419] border-t border-gray-700/30 p-4">
            <div className="flex items-center justify-between">
              {/* Current Track Info */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-600 flex items-center justify-center">
                  {currentTrack.artwork ? (
                    <img 
                      src={currentTrack.artwork} 
                      alt={currentTrack.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Music className="w-8 h-8 text-white/70" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-medium truncate">{currentTrack.title}</p>
                  <p className="text-white/70 text-sm truncate">{currentTrack.artist}</p>
                </div>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() =>handleLike(currentTrack.id)}
                >
                  <Heart className={`w-4 h-4 ${isLiked[currentTrack.id] ? 'text-red-500' : 'text-white/70'}`} />
                </Button>
              </div>

              {/* Player Controls */}
              <div className="flex flex-col items-center space-y-2 flex-2">
                {/* Control Buttons */}
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Shuffle className="w-4 h-4 text-white/70" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={playPreviousTrack}>
                    <SkipBack className="w-5 h-5 text-white" />
                  </Button>
                  <Button 
                    className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 text-black"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={playNextTrack}>
                    <SkipForward className="w-5 h-5 text-white" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Repeat className="w-4 h-4 text-white/70" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center space-x-2 w-96">
                  <span className="text-xs text-white/70 w-10">
                    {formatTime(currentTime)}
                  </span>
                  <Slider
                    value={[duration ? (currentTime / duration) * 100 : 0]}
                    onValueChange={handleSeek}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/70 w-10">
                    {formatTime(duration)}
                  </span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center space-x-2 flex-1 justify-end">
                <Volume2 className="w-4 h-4 text-white/70" />
                <Slider
                  value={[volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
