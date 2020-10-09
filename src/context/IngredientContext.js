import React, { createContext, useState, useContext, useEffect } from 'react';

import { getIngredients, createIngredient } from '../services/ingredient';

const IngredientContext = createContext();

export default function IngredientProvider({ children }) {
  const [ingredients, setIngredients] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getIngredients().then(({ data }) => setIngredients(data));
  }, [reload]);

  const addIngredient = async (ingredient) => {
    return createIngredient(ingredient).then(({ data }) => {
      if (data?.id) setIngredients([...ingredients, data]);
      setReload(!reload);
      return data;
    });
  };

  return (
    <IngredientContext.Provider
      value={{ ingredients, setIngredients, addIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

export function useIngredientContext() {
  const context = useContext(IngredientContext);
  if (!context)
    throw new Error(
      'Improper use of useIngredientContext, place it inside the IngredientProvider'
    );
  const { ingredients, setIngredients, addIngredient } = context;
  return { ingredients, setIngredients, addIngredient };
}
