import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import FormAddItem from '../components/sopping-list/Form';
import ModalProvider from '../context/ModalContext';
import IngredientProvider from '../context/IngredientContext';

export default function ShoopingList() {
  return (
    <>
      <IngredientProvider>
        <ModalProvider>
          <Header />
          <Container>
            <Row className='mt-5'>
              <Col md={12} className='d-flex justify-content-between'>
                <PageHeader
                  title='Lista de compras'
                  labelButton='Adicionar'
                ></PageHeader>
              </Col>
              <Col md={12}>
                <hr className='mb-4'></hr>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col md={12}></Col>
            </Row>
          </Container>
          <FormAddItem></FormAddItem>
        </ModalProvider>
      </IngredientProvider>
    </>
  );
}
