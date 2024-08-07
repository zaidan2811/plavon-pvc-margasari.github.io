import * as React from 'react';
import Layout from './layout';
import Footer from '@/components/Footer/page';
import MainContent from '@/components/MainContent/page';
import Navbar from '@/components/Navbar/page';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar/>
      <MainContent />
      <Footer/>
    </>
  );
};

export default HomePage;
