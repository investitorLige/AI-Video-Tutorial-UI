'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function VideoViewer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef(null);

  // Get video ID from URL (in real Next.js, use useSearchParams)
  const videoId = useSearchParams().get("videoId"); // Example video ID

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };    

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowChat(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'This is a simulated AI response. In production, this would connect to your LLM backend to provide context-aware answers about the video content.'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-black">
      {/* Video Section - Theater Mode - Fixed */}
      <div className="h-screen flex items-center justify-center bg-black sticky top-0 z-0">
        <div className="w-full max-w-[95vw] aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-slate-900 border-t border-slate-800 sticky bottom-0 z-10">
        {/* Chat Messages - Expandable */}
        {showChat && messages.length > 0 && (
          <div className="border-b border-slate-800">
            <div className="max-w-5xl mx-auto px-4">
              <button
                onClick={() => setShowChat(!showChat)}
                className="w-full py-2 flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                <span className="text-sm">Hide conversation</span>
              </button>
            </div>
            
            <div className="max-w-5xl mx-auto px-4 pb-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.role === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-800 text-slate-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        )}

        {/* Show conversation button when hidden */}
        {!showChat && messages.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 border-b border-slate-800">
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-full py-2 flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Show conversation ({messages.length})</span>
            </button>
          </div>
        )}

        {/* Input Box */}
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask AI anything about this video..."
                className="w-full bg-slate-800 text-white placeholder-slate-400 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-6 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </div>

      {/* Additional Content Section - Add your components here */}
      <div className="bg-slate-950 py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Related Content</h2>
          <p className="text-slate-400">Add your additional components here. The chat will stay fixed at the bottom.</p>
          
          {/* Example placeholder content */}
          <div className="mt-8 space-y-4">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Component 1</h3>
              <p className="text-slate-400">Your content here</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Component 2</h3>
              <p className="text-slate-400">Your content here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}