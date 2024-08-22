"use client";
import * as React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Content } from './styled';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Content>
        {/* Your page content goes here */}
      </Content>
      <Footer />
    </main>
  );
};

export default Home;
