import React, { useState, useEffect } from 'react';
import { Col, Form, Button, Modal } from 'react-bootstrap';

import { getMetrics } from '../../services/metric';
import { useIngredientContext } from '../../context/ingredient';
import { useModalContext } from '../../context/modal';

export default function FormIngredient() {
  const [metrics, setMetrics] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({ metricId: 1 });

  const { addIngredient } = useIngredientContext();
  const { show, setShow } = useModalContext();

  useEffect(() => {
    getMetrics().then(({ data }) => setMetrics(data));
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNameChange = (event) => {
    setCurrentIngredient({ ...currentIngredient, name: event.target.value });
  };

  const handleMetricChange = (event) => {
    setCurrentIngredient({
      ...currentIngredient,
      metricValue: parseFloat(event.target.value),
    });
  };

  const handleUnityChange = (event) => {
    setCurrentIngredient({
      ...currentIngredient,
      metricId: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addIngredient(currentIngredient).then((data) => {
      if (data) handleClose();
    });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar novo ingrediente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='ingredientName'>
            <Form.Control
              type='text'
              placeholder='Informe um nome'
              onChange={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Row>
            <Col xs={8}>
              <Form.Group controlId='ingredientMetric'>
                <Form.Control
                  type='number'
                  min='0.1'
                  step='0.01'
                  placeholder='Informe uma métrica'
                  onChange={handleMetricChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Control
                  as='select'
                  onChange={handleUnityChange}
                  custom
                  required
                >
                  <option key={-1} value=''>
                    Unidade
                  </option>
                  {metrics.map((metric) => (
                    <option key={metric.id} value={metric.id}>
                      {metric.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant='primary' type='submit' className='float-right'>
            Adicionar ingrediente
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
