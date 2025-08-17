import React from 'react';
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full mr-3 flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-4 h-1 bg-white rounded"></div>
              <div className="w-4 h-1 bg-white rounded ml-1"></div>
            </div>
          </div>
          <div className="text-xl font-bold">SCOREFY</div>
        </div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-green-500"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm bg-green-600 px-3 py-1 rounded-full">
            msttxxx
          </div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            Level 4
          </div>
        </div>
      </header>

      <main className="flex-1 p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, msttxx!</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-700 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Current Points</h3>
                <p className="text-2xl font-bold">4444</p>
              </div>
              <div className="text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-green-700 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">Level 4</h3>
                <p className="text-2xl font-bold">4444</p>
              </div>
              <div className="text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-green-700 p-6 rounded-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">4-Day Streak</h3>
                <p className="text-sm text-green-200">Keep up the good work!</p>
              </div>
              <div className="text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Listening History */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Listening History</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Track Name</p>
                    <p className="text-sm text-gray-400">Artist</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    Track Length
                  </div>
                  <button className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Missions */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Daily Missions</h3>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium mb-1">Mission Description</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                    Go
                  </Button>
                </div>
              ))}
              
              {/* Mission Progress */}
              <div className="mt-6 p-4 bg-green-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Mission Completed: 0/6</span>
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-1 text-sm rounded">
                    Claim Reward
                  </Button>
                </div>
                <div className="w-full bg-green-800 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-center text-sm text-gray-400">
        <div className="flex items-center justify-center space-x-2">
          <span>📊 DashboardFooter</span>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
