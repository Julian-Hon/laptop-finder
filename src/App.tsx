import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="m-12 flex h-screen items-center justify-center bg-green-400 text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20">
        <p>Welcome to our Laptop Compatibility app</p>
      </section>
    </div>
  );
};



export default App
