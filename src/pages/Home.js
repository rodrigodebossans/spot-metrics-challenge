import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import IngredientProvider from '../context/IngredientContext';
import ModalProvider from '../context/ModalContext';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import TableIngredient from '../components/ingredient/Table';
import FormIngredient from '../components/ingredient/Form';

export default function Home() {
  return (
    <>
      <IngredientProvider>
        <ModalProvider>
          <Header />
          <Container>
            <Row className='mt-5'>
              <Col md={12} className='d-flex justify-content-between'>
                <PageHeader></PageHeader>
              </Col>
              <Col md={12}>
                <hr className='mb-4'></hr>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col md={12}>
                <TableIngredient />
              </Col>
            </Row>
          </Container>
          <FormIngredient />
        </ModalProvider>
      </IngredientProvider>
    </>
  );
}
