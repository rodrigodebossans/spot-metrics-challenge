import React, { useState, useEffect } from 'react';
import { Col, Form, Button, Modal } from 'react-bootstrap';

import { useModalContext } from '../../context/ModalContext';
import { useIngredientContext } from '../../context/IngredientContext';

export default function FormAddItem() {
  const { show, setShow } = useModalContext();

  const { ingredients } = useIngredientContext();

  const [item, setItem] = useState({ amount: 1 });
  const [shoppingList, setShoppingList] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleItemChange = (event) => {
    setItem({
      ...item,
      ingredient: ingredients[event.target.value],
    });
  };

  const handleAmountChange = (event) => {
    setItem({
      ...item,
      amount: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingItem = shoppingList.find(
      (tmpItem) =>
        parseInt(tmpItem.ingredient.id) === parseInt(item.ingredient.id)
    );

    if (existingItem) {
      const listWithoutExistingItem = shoppingList.filter(
        (item) => item.ingredient.id !== existingItem.ingredient.id
      );
      setShoppingList([...listWithoutExistingItem, item]);
    } else setShoppingList([...shoppingList, item]);

    setShow(false);
  };

  useEffect(() => {
    console.log(shoppingList)
  }, [shoppingList])

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar item à lista de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {ingredients.length ? (
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={8}>
                <Form.Group>
                  <Form.Control
                    required
                    as='select'
                    onChange={handleItemChange}
                  >
                    <option key={-1} value=''>
                      Escolha um elemento
                    </option>
                    {ingredients.map((ingredient, i) => (
                      <option key={i} value={i}>
                        {ingredient.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId='ingredientMetric'>
                  <Form.Control
                    type='number'
                    min='1'
                    placeholder='Quantidade'
                    onChange={handleAmountChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Button variant='primary' type='submit' className='float-right'>
              Adicionar ingrediente
            </Button>
          </Form>
        ) : (
          <p className='text-center'>
            Para adicionar um item, <a href='/'>cadastre um ingrediente</a>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
}
