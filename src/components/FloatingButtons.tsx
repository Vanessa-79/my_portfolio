import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/256750468584"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons; 