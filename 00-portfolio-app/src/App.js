import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navigation';
import Project from './components/project';
import AboutMe from './components/pages/aboutme';
import Resume from './components/pages/resume';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Resume />
      <Project />
      <Footer/>
    </div>
  );
}

export default App;
