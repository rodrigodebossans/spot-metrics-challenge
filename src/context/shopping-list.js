import React, { useState, createContext, useContext } from 'react';

const ShoppingListContext = createContext();

export default function ShoppingListProvider({ children }) {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <ShoppingListContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingListContext() {
  const context = useContext(ShoppingListContext);
  if (!context)
    throw new Error(
      'Improper use of useShoppingListContext, place it inside the ShoppingListProvider'
    );
  const { shoppingList, setShoppingList } = context;
  return { shoppingList, setShoppingList };
}
