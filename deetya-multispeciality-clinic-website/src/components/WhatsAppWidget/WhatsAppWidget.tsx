import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiSend, FiMessageCircle } from 'react-icons/fi';
import { clinicInfo } from '../../data/siteData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(clinicInfo.whatsappDefault);
  const [showPulse, setShowPulse] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Keep the fixed wrapper from blocking taps behind it (e.g. FAQ items on mobile);
  // only the floating button and open popup re-enable pointer events.
  return (
    <div className="fixed bottom-4 right-4 xs:bottom-5 xs:right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 xs:gap-4 pointer-events-none">
      {/* Chat Popup */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="w-[calc(100vw-32px)] xs:w-[380px] bg-white rounded-xl xs:rounded-2xl shadow-2xl shadow-black/15 overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-xs xs:text-sm">{clinicInfo.fullName}</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-green-100 text-xs font-medium">Online now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <FiX className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#e5ddd5] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23c8c0b8%22%20fill-opacity%3D%220.15%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] px-4 py-5 min-h-[140px]">
            {/* Bot Message */}
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <FaWhatsapp className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[260px]">
                <p className="text-gray-800 text-xs xs:text-sm leading-relaxed">
                  👋 Hello! Welcome to <span className="font-semibold">{clinicInfo.fullName}</span>.
                </p>
                <p className="text-gray-600 text-xs xs:text-sm leading-relaxed mt-1.5">
                  How can we help you today? Type your message below and we'll respond on WhatsApp.
                </p>
                <p className="text-xs text-gray-400 mt-2 text-right">just now</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="px-3 py-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-xs xs:text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 resize-none leading-relaxed"
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-11 h-11 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 disabled:shadow-none transition-all duration-200 shrink-0 hover:-translate-y-0.5 disabled:translate-y-0"
                aria-label="Send message"
              >
                <FiSend className="w-4.5 h-4.5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send • Powered by WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="relative pointer-events-auto">
        {/* Auto-tooltip */}
        <div
          className={`pointer-events-none absolute bottom-full right-0 mb-3 transition-all duration-500 ${
            !isOpen && showPulse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="bg-white px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap flex items-center gap-2">
            <FiMessageCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Need help? Chat with us!</span>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
          </div>
        </div>

        <button
          onClick={() => { setIsOpen(!isOpen); setShowPulse(false); }}
          className={`group w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
            isOpen
              ? 'bg-gray-600 hover:bg-gray-700 shadow-gray-600/30 rotate-0'
              : 'bg-green-500 hover:bg-green-600 shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 hover:scale-105'
          }`}
          aria-label={isOpen ? 'Close chat' : 'Open WhatsApp chat'}
        >
          <FaWhatsapp
            className={`w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 lg:w-7.5 lg:h-7.5 text-white absolute transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <FiX
            className={`w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 lg:w-6.5 lg:h-6.5 text-white absolute transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
            }`}
          />

          {/* Pulse rings */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
              <span className="absolute -inset-1 rounded-full bg-green-400/10 animate-pulse" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
