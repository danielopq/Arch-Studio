import './App.css'
import SectionName from './components/sectionName/SectionName';
import TopNavBar from './components/topNavBar/TopNavBar';
import BottomNavBar from './components/bottomNavBar/BottomNavBar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  return (
    <>
      <SectionName title={'home'} />
      <TopNavBar />
      {/* <Home /> */}
      {/* <Portfolio /> */}
      <AboutUs />
      <BottomNavBar />
    </>
  )
}

export default App
