import './App.css'
import SectionName from './components/sectionName/SectionName';
import TopNavBar from './components/topNavBar/TopNavBar';
import BottomNavBar from './components/bottomNavBar/BottomNavBar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <SectionName title={'home'} />
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BottomNavBar />
    </>
  )
}

export default App
