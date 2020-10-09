import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [show, setShow] = useState(false);

  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  const { show, setShow } = context;
  if (!context)
    throw new Error(
      'Improper use of useModalContext, place it inside the ModalProvider'
    );
  return { show, setShow };
}
