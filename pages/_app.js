import ChatWidget from '../components/ChatWidget';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  );
}

export default MyApp;
import '../styles/globals.css';
