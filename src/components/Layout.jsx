import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
