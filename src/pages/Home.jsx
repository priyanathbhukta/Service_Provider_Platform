
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServiceCategories from '../components/home/ServiceCategories';
import Testimonials from '../components/home/Testimonials';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ServiceCategories />
      <Testimonials />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
