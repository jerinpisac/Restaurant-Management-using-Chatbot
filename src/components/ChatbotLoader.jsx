import { useEffect } from 'react';

function ChatbotLoader() {
  useEffect(() => {
    const injectScript = (src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    injectScript(import.meta.env.VITE_BOTPRESS_INJECT);
    injectScript(import.meta.env.VITE_BOTPRESS_CUSTOM);
  }, []);

  return null;
}

export default ChatbotLoader;
