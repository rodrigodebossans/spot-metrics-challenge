import React, { useState, useEffect } from 'react';
import { Col, Form, Button, Modal } from 'react-bootstrap';

import { getMetrics } from '../../services/metrics';
import { useIngredientContext } from '../../context/IngredientContext';

export default function FormIngredient({ visible }) {
  const [metrics, setMetrics] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [validate, setValidate] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const { addIngredient } = useIngredientContext();

  useEffect(() => {
    getMetrics().then(({ data }) => setMetrics(data));
  }, []);
  
  useEffect(() => {
    setShowModal(visible)
    console.log(visible)
  }, [visible]);

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
    addIngredient(currentIngredient).then(data => {
      // handleClose()
    });
    setValidate(true);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar novo ingrediente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form validate={validate.toString()} onSubmit={handleSubmit}>
          <Form.Group controlId="ingredientName">
            <Form.Control
              type="text"
              placeholder="Informe um nome"
              onChange={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Row>
            <Col xs={8}>
              <Form.Group controlId="ingredientMetric">
                <Form.Control
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Informe uma métrica"
                  onChange={handleMetricChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue={0}
                  onChange={handleUnityChange}
                  required
                >
                  <option key={0} value={0} disabled>
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

          <Button variant="primary" type="submit" className="float-right">
            Adicionar ingrediente
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
