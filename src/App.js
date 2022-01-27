import React from 'react';
import { Header } from './Header';
import { Container } from 'react-bootstrap';
import { MZContent } from './MZContent';
import { Footer } from './Footer';

export const App = () => {
  return (
    <Container id="wrapper">
      <Header />
      <MZContent />
      <Footer />
    </Container>
  )
}


