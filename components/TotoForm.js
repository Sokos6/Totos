import React, { useState, useContext } from 'react';
import { TotosContext } from '../contexts/TotosContext';

export default function TotoForm() {
  const [toto, setToto] = useState('');
  const { addToto } = useContext(TotosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToto(toto);
    setToto('');
  };

  return (
    <form className='form my-6' onSubmit={handleSubmit}>
      <div className='flex flex-col text-sm mb-2'>
        <label htmlFor='toto' className='font-bold mb-2 text-gray-800'>
          Toto
        </label>
        <input
          type='text'
          name='toto'
          id='toto'
          value={toto}
          onChange={(e) => setToto(e.target.value)}
          placeholder='Nextiva Connect Authentication'
          className='border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500'
        />
      </div>
      <button
        type='submit'
        className='w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4'
      >
        Submit
      </button>
    </form>
  );
}
