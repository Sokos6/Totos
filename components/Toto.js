import React, { useContext } from 'react';
import { TotosContext } from '../contexts/TotosContext';

export default function Toto({ toto }) {
  const { updateToto, deleteToto } = useContext(TotosContext);

  const handleToggleCompleted = () => {
    const updatedFields = {
      ...toto.fields,
      completed: !toto.fields.completed,
    };

    const updatedToto = { id: toto.id, fields: updatedFields };
    updateToto(updatedToto);
  };

  return (
    <li className='bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4'>
      <input
        type='checkbox'
        name='completed'
        id='completed'
        checked={toto.fields.completed}
        className='mr-2 form-checkbox h-5 w-5'
        onChange={handleToggleCompleted}
      />
      <p
        className={`flex-1 text-gray-800 ${
          toto.fields.completed ? 'line-through' : ''
        }`}
      >
        {toto.fields.description}
      </p>
      <button
        type='button'
        className='text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded '
        onClick={() => deleteToto(toto.id)}
      >
        Delete
      </button>
    </li>
  );
}
