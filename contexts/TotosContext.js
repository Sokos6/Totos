import { createContext, useState } from 'react';

const TotosContext = createContext();

const TotosProvider = ({ children }) => {
  const [totos, setTotos] = useState([]);

  const refreshTotos = async () => {
    try {
      const res = await fetch('/api/getTotos');
      const latestTotos = await res.json();
      setTotos(latestTotos);
    } catch (err) {
      console.error(err);
    }
  };

  const addToto = async (description) => {
    try {
      const res = await fetch('/api/createToto', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newToto = await res.json();
      setTotos((prevTotos) => {
        return [newToto, ...prevTotos];
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateToto = async (updatedToto) => {
    try {
      const res = await fetch('/api/updateToto', {
        method: 'PUT',
        body: JSON.stringify(updatedToto),
        headers: { 'Content-Type': 'application/json' },
      });
      await res.json();
      setTotos((prevTotos) => {
        const existingTotos = [...prevTotos];
        const existingToto = existingTotos.find(
          (toto) => toto.id === updatedToto.id
        );
        existingToto.fields = updatedToto.fields;
        return existingTotos;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteToto = async (id) => {
    try {
      await fetch('/api/deleteToto', {
        method: 'Delete',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });

      setTotos((prevTotos) => {
        return prevTotos.filter((toto) => toto.id !== id);
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <TotosContext.Provider
      value={{
        totos,
        setTotos,
        refreshTotos,
        updateToto,
        deleteToto,
        addToto,
      }}
    >
      {children}
    </TotosContext.Provider>
  );
};

export { TotosProvider, TotosContext };
