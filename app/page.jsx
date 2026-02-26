'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StandardsGrid from './components/StandardsGrid';
import Mission from './components/Mission';
import Services from './components/Services';
import CertificationProcess from './components/CertificationProcess';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StandardsGrid />
      <Mission />
      <Services />
      <CertificationProcess />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
