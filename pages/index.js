import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Totos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-2xl text-center mb-4'>My Totos</h1>
        <Navbar />
      </main>
    </div>
  );
}
