import React from 'react';
import { Table } from 'react-bootstrap';

import { useIngredientContext } from '../../context/IngredientContext';

export default function TableIngredient() {
  const { ingredients } = useIngredientContext();

  if (ingredients.length)
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Métrica</th>
            <th>Unidade</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient?.id}</td>
              <td>{ingredient?.name}</td>
              <td>{ingredient?.metricValue}</td>
              <td>{ingredient?.metric?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  else
    return (
      <p className='text-center'>
        Você ainda não adicionou nenhum ingrediente :(
      </p>
    );
}
