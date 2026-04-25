/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Equipment from './components/Equipment';
import Artists from './components/Artists';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Rooms />
        <Equipment />
        <Artists />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

