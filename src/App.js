import React, { useState } from 'react';

import './App.scss';
import { Navbar } from './components';
import { Header, About } from './container';

const App = () => {
   
   return (
      <div className='app'>
         <Navbar />
         <main className='app__flex'>
            <Header />
            <About />
         </main>
      </div>
   )
}

export default App;
