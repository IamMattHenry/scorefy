"use client";

import {
  Ear,
  Play,
  TrendingUp,
  Flame,
  Target,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // Handle logout functionality
  const handleLogout = () => {
    // Add your logout logic here (clear tokens, etc.)
    router.push("/login");
  };

  // Handle settings navigation
  const handleSettings = () => {
    // Navigate to settings page
    router.push("/settings");
  };

  return (
    <div className="min-h-screen font-blinker bg-[linear-gradient(to_bottom_right,_#030A00_0%,_#091E01_50%,_#030A00_100%)]">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        {/* Logo Section - Left side */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 text-white">
            <Ear className="h-10 w-10" />
            <h1 className="text-4xl font-bold font-anton">Scorefy</h1>
          </Link>
        </div>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full p-1.5 pl-10 rounded-lg bg-gray-800/30 text-white placeholder-gray-400 border border-gray-600/30 focus:outline-none focus:border-green-500 transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* User Profile Section - Right side */}
        <div className="flex items-center space-x-4">
          {/* Username with ID */}
          <div className="text-white font-semibold">
            msttxx<span className="text-green-500">#4444</span>
            {/* Level Progress Bar */}
            <div className="flex flex-col items-end space-y-1">
              <div className="w-32 bg-gray-800/50 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="text-green-500 text-sm font-semibold">
              Level: 4
            </div>
          </div>

          {/* Interactive Avatar with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors p-0"
              >
                {/* Avatar with sunglasses emoji/icon */}
                <div className="flex items-center justify-center w-full h-full text-white text-lg">
                  😎
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
              </Button>
            </DropdownMenuTrigger>

            {/* Dropdown Menu Content */}
            <DropdownMenuContent
              className="w-56 bg-gray-800 border-gray-700"
              align="end"
              forceMount
            >
              <DropdownMenuLabel className="font-normal text-white">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">msttxx</p>
                  <p className="text-xs leading-none text-gray-400">
                    Level 4 • 4444 Points
                  </p>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator className="bg-gray-700" />

              {/* Profile Menu Item */}
              <DropdownMenuItem
                className="text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => router.push("/profile")}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              {/* Settings Menu Item */}
              <DropdownMenuItem
                className="text-white hover:bg-gray-700 cursor-pointer"
                onClick={handleSettings}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-gray-700" />

              {/* Logout Menu Item */}
              <DropdownMenuItem
                className="text-red-400 hover:bg-gray-700 hover:text-red-300 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-3xl font-bold text-white mb-8">Welcome, msttxx!</h2>

        {/* Stats Cards - Made interactive with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current Points Card */}
          <div className="bg-[#446D4A] p-6 rounded-lg relative hover:bg-[#4a7550] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Current Points
                </h3>
                <p className="text-3xl font-bold text-white group-hover:scale-105 transition-transform">
                  4444
                </p>
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors">
                <Target className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Level Card */}
          <div className="bg-[#446D4A] p-6 rounded-lg relative hover:bg-[#4a7550] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Level 4
                </h3>
                <p className="text-3xl font-bold text-white group-hover:scale-105 transition-transform">
                  4444
                </p>
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Streak Card */}
          <div className="bg-[#446D4A] p-6 rounded-lg relative hover:bg-[#4a7550] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  4-Day Streak
                </h3>
                <p className="text-sm text-white/80">Keep up the good work!</p>
              </div>
              <div className="text-white/70 group-hover:text-white transition-colors">
                <Flame className="w-6 h-6 group-hover:text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Listening History */}
          <div className="bg-[#172419] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Listening History
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div>
                      <p className="text-white font-medium">Track Name</p>
                      <p className="text-gray-400 text-sm">Artist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">Track Length</span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Missions */}
          <div className="bg-[#172419] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Daily Missions
            </h3>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div>
                    <p className="text-white font-medium">
                      Mission Description
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                  >
                    Go
                  </Button>
                </div>
              ))}

              {/* Mission Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">
                    Mission Completed: 0/6
                  </span>
                  <Button
                    size="sm"
                    className="bg-gray-600 hover:bg-gray-700 text-white transition-colors"
                  >
                    Claim Reward
                  </Button>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between py-4 px-8 bg-[#172419]/50 w-full mt-20 border-t border-gray-700/30">
        <div className="flex flex-col items-center w-full justify-center text-white/70 font-blinker text-sm">
          <div className="flex flex-row items-center justify-center mt-2">
            <p>© 2025 Scorefy</p>
            <p className="ml-4">Terms</p>
            <p className="ml-4">Privacy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
