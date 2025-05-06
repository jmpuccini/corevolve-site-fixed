import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Only load Tawk.to in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const s1 = document.createElement('script');
      s1.src = 'https://embed.tawk.to/68158d2ffc50e9190eb83df0/1iqa2v07a';
      s1.async = true;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    }
  }, []);

  return null;
};

export default ChatWidget;
