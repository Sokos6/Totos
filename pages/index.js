import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { table, minifyRecords } from './api/utils/Airtable';
import Toto from '../components/Toto';
import Navbar from '../components/Navbar';
import { TotosContext } from '../contexts/TotosContext';
import auth0 from './api/utils/auth0';

export default function Home({ initialTotos, user }) {
  const { totos, setTotos } = useContext(TotosContext);

  useEffect(() => {
    setTotos(initialTotos);
  }, []);

  return (
    <div className='max-w-xl m-auto p-2'>
      <Head>
        <title>Totos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar user={user}/>
        <>
          <ul>
            {totos && totos.map((toto) => <Toto key={toto.id} toto={toto} />)}
          </ul>
        </>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  let totos = await table.select().firstPage();
  return {
    props: {
      initialTotos: minifyRecords(totos),
      user: session?.user || null,
    },
  };
}
