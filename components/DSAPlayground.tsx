import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const DSAPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm ThinkDSA. Paste a problem statement here or ask me about a data structure. I'm here to help you *think* through the solution, not just give you the code.",
      type: 'general'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      type: 'general'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Convert messages to history format for Gemini
    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const response = await getGeminiResponse(textToSend, history);

    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response,
      type: 'general'
    };

    setMessages(prev => [...prev, aiMessage]);
    setLoading(false);
  };

  const QuickAction = ({ label, prompt }: { label: string, prompt: string }) => (
    <button
      onClick={() => handleSend(prompt)}
      disabled={loading}
      className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors border border-indigo-200"
    >
      {label}
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-64px)]">
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-6 py-4 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                }`}
              >
                {msg.role === 'model' ? (
                  <div className="prose prose-sm prose-indigo max-w-none">
                     <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-6 py-4 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
             {/* Quick Actions (Contextual) */}
             <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs text-slate-400 font-medium py-1.5">Ask ThinkDSA:</span>
              <QuickAction label="Give me a hint" prompt="I'm stuck on this problem. Can you give me a small hint without revealing the full solution?" />
              <QuickAction label="Suggest Approach" prompt="What is the best algorithmic approach to solve this problem effectively?" />
              <QuickAction label="Analyze Complexity" prompt="What would be the time and space complexity of the optimal solution for this?" />
              <QuickAction label="Pseudocode" prompt="Can you provide pseudocode for this algorithm?" />
            </div>

            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Paste your DSA problem here or ask a question..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none min-h-[60px] max-h-[120px]"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              ThinkDSA promotes "Think-First". We encourage understanding over copying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAPlayground;
