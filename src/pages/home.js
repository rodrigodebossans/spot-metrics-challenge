import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import IngredientProvider from '../context/ingredient';
import ModalProvider from '../context/modal';
import Header from '../components/header';
import PageHeader from '../components/page-header';
import TableIngredient from '../components/ingredient/table';
import FormIngredient from '../components/ingredient/form';

export default function Home() {
  return (
    <>
      <IngredientProvider>
        <ModalProvider>
          <Header />
          <Container>
            <Row className='mt-5'>
              <Col md={12} className='d-flex justify-content-between'>
                <PageHeader
                  title='Meus ingredientes'
                  labelButton='Adicionar'
                ></PageHeader>
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
