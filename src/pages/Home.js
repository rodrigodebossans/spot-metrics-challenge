import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Header from '../components/Header';
import FormIngredient from '../components/ingredient/Form';
import TableIngredient from '../components/ingredient/Table';

import IngredientProvider from '../context/IngredientContext';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <IngredientProvider>
        <Header />
        <Container>
          <Row className="mt-5">
            <Col md={12} className="d-flex justify-content-between">
              <h1 className="h3">Meus Ingredientes</h1>
              <Button variant="dark" onClick={handleShow}>
                Adicionar
              </Button>
            </Col>
            <Col md={12}>
              <hr className="mb-4"></hr>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={12}>
              <TableIngredient />
            </Col>
          </Row>
        </Container>
        <FormIngredient visible={show} />
      </IngredientProvider>
    </>
  );
}
