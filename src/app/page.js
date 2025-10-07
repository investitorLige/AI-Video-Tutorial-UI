'use client';

import { useState } from 'react';
import { Play, Brain, MessageSquare, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos', icon: Sparkles },
    { id: 'math', name: 'Mathematics', icon: Brain },
    { id: 'cs', name: 'Computer Science', icon: Brain },
    { id: 'physics', name: 'Physics', icon: Brain }
  ];

  const videos = [
    {
      id: '3Blue1Brown-essence-linear-algebra',
      title: 'Essence of Linear Algebra',
      category: 'math',
      thumbnail: 'https://img.youtube.com/vi/fNk_zzaMoSs/maxresdefault.jpg',
      youtubeId: 'fNk_zzaMoSs',
      duration: '10:58',
      instructor: '3Blue1Brown'
    },
    {
      id: 'calculus-derivatives',
      title: 'The Essence of Calculus',
      category: 'math',
      thumbnail: 'https://img.youtube.com/vi/WUvTyaaNkzM/maxresdefault.jpg',
      youtubeId: 'WUvTyaaNkzM',
      duration: '17:21',
      instructor: '3Blue1Brown'
    },
    {
      id: 'harvard-cs50',
      title: 'CS50 - Introduction to Computer Science',
      category: 'cs',
      thumbnail: 'https://img.youtube.com/vi/8mAITcNt710/maxresdefault.jpg',
      youtubeId: '8mAITcNt710',
      duration: '1:45:00',
      instructor: 'Harvard University'
    },
    {
      id: 'algorithms-explained',
      title: 'Algorithms and Data Structures',
      category: 'cs',
      thumbnail: 'https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg',
      youtubeId: '8hly31xKli0',
      duration: '2:30:00',
      instructor: 'freeCodeCamp'
    },
    {
      id: 'quantum-mechanics',
      title: 'Quantum Mechanics - The Basics',
      category: 'physics',
      thumbnail: 'https://img.youtube.com/vi/7KB1VWfKKNY/maxresdefault.jpg',
      youtubeId: '7KB1VWfKKNY',
      duration: '15:30',
      instructor: 'Domain of Science'
    },
    {
      id: 'special-relativity',
      title: 'Special Relativity Explained',
      category: 'physics',
      thumbnail: 'https://img.youtube.com/vi/ajhFNcUTJI0/maxresdefault.jpg',
      youtubeId: 'ajhFNcUTJI0',
      duration: '18:25',
      instructor: 'Physics Explained'
    }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AI Video Wrapper</h1>
                <p className="text-sm text-slate-400">Learn with AI assistance</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Learn Smarter with AI
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch educational videos and get instant answers to your questions from an AI assistant
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Watch & Learn</h3>
            <p className="text-slate-400">Stream educational content from top educators</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ask Questions</h3>
            <p className="text-slate-400">Get instant answers while watching videos</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Powered</h3>
            <p className="text-slate-400">Smart assistant understands your learning context</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Video Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <a
              key={video.id}
              href={`/video?videoId=${video.youtubeId}`}
              className="group bg-slate-800/30 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-slate-900 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-400">{video.instructor}</p>
                <div className="mt-2 inline-block px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300 capitalize">
                  {video.category}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}