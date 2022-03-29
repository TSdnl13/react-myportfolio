import React from 'react';

import './App.scss';
import { Navbar } from './components';
import { Header, About, Projects, Skills, Contact, Footer } from './container';

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
         <Footer />
      </div>
   )
}

export default App;
