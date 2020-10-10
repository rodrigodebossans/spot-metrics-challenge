import React from 'react';
import { Button, Table } from 'react-bootstrap';

import { useShoppingListContext } from '../../context/ShoppingListContext';

export default function TableShoppingList() {
  const { shoppingList } = useShoppingListContext();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {shoppingList.length ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {shoppingList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.ingredient?.name}</td>
                  <td>{item?.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="d-print-none" variant='dark' onClick={handlePrint}>
            Imprimir
          </Button>
        </>
      ) : (
        <p className='text-center'>
          Você ainda não adicionou nenhum item à lista :(
        </p>
      )}
    </>
  );
}
