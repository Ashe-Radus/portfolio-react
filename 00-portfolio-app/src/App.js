import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navigation';
import Project from './components/project';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Project />
      <Footer/>
    </div>
  );
}

export default App;
