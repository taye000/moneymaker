import * as React from 'react';
import { Container } from './styled';
import Features from './components/Features';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';

const Home = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Features />
        <WhyChooseUs />
        <CallToAction />
      </Container>
    </main>
  );
};

export default Home;
