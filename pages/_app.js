import '../styles/globals.css';
import '../styles/index.css';
import { TotosProvider } from '../contexts/TotosContext';

function MyApp({ Component, pageProps }) {
  return (
    <TotosProvider>
    <div className='container mx-auto my-10 max-w-xl'>
      <Component {...pageProps} />
    </div>
    </TotosProvider>
  );
}

export default MyApp;
