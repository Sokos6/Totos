import Head from 'next/head';
import { table, minifyRecords } from './api/utils/Airtable';
import Toto from '../components/Toto';
import Navbar from '../components/Navbar';

export default function Home({ initialTotos }) {
  return (
    <div className='max-w-xl m-auto p-2'>
      <Head>
        <title>Totos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <>
          <ul>
            {initialTotos &&
              initialTotos.map((toto) => <Toto toto={toto} key={toto.id} />)}
          </ul>
        </>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let totos = await table.select({}).firstPage();
  return {
    props: {
      initialTotos: minifyRecords(totos),
    },
  };
}
