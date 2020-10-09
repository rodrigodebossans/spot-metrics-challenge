import React from 'react';
import { Button } from 'react-bootstrap';

import { useModalContext } from '../context/ModalContext';

export default function PageHeader() {
  const { setShow } = useModalContext();

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <h1 className='h3'>Meus Ingredientes</h1>
      <Button variant='dark' onClick={handleShow}>
        Adicionar
      </Button>
    </>
  );
}
