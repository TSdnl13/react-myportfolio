import React, { useState } from 'react';

import './App.scss';
import { Navbar } from './components';
import { Header } from './container';

const App = () => {
   
   return (
      <div className='app'>
         <Navbar />
         <main className='app__flex'>
            <Header />
         </main>
      </div>
   )
}

export default App;
