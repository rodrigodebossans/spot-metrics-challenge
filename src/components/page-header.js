import React from 'react';
import { Button } from 'react-bootstrap';

import { useModalContext } from '../context/modal';

export default function PageHeader({ title, labelButton }) {
  const { setShow } = useModalContext();

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <h1 className='h3'>{title}</h1>
      <Button className='d-print-none' variant='dark' onClick={handleShow}>
        {labelButton}
      </Button>
    </>
  );
}
