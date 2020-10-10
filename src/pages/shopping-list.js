import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/header';
import PageHeader from '../components/page-header';
import FormAddItem from '../components/sopping-list/form';
import ModalProvider from '../context/modal';
import IngredientProvider from '../context/ingredient';
import TableShoppingList from '../components/sopping-list/table';
import ShoppingListProvider from '../context/shopping-list';

export default function ShopingList() {
  return (
    <>
      <ShoppingListProvider>
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
                <Col md={12}>
                  <TableShoppingList></TableShoppingList>
                </Col>
              </Row>
            </Container>
            <FormAddItem></FormAddItem>
          </ModalProvider>
        </IngredientProvider>
      </ShoppingListProvider>
    </>
  );
}
