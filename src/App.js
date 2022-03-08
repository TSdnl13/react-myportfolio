import React, { useState } from 'react';

import './App.scss';
import { Navbar } from './components';
import { Header, About, Projects, Skills, Contact } from './container';

const App = () => {
   
   return (
      <div className='app'>
         <Navbar />
         <main className='app__flex'>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
         </main>
      </div>
   )
}

let hello = ""

export default App;
