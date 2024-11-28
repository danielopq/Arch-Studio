import './App.css'
import SectionName from './components/sectionName/SectionName';
import TopNavBar from './components/topNavBar/TopNavBar';
import BottomNavBar from './components/bottomNavBar/BottomNavBar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


type SectnName = 'home' | 'portfolio' | 'about us' | 'contact';

function App() {
  const [currentSection,SetCurrentSection] = useState<SectnName>('home');
  return (
    <>
      <SectionName title={currentSection} />
      <TopNavBar currentSection={currentSection}/>
      <Routes>
        <Route path="/" element={<Home setCurrentSection={SetCurrentSection}/>} />
        <Route path="/portfolio" element={<Portfolio setCurrentSection={SetCurrentSection}/>} />
        <Route path="/aboutus" element={<AboutUs setCurrentSection={SetCurrentSection}/>} />
        <Route path="/contact" element={<Contact setCurrentSection={SetCurrentSection}/>} />
      </Routes>
      <BottomNavBar />
    </>
  )
}

export default App;
