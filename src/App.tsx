import './App.css'
import SectionName from './components/sectionName/SectionName';
import TopNavBar from './components/topNavBar/TopNavBar';
import BottomNavBar from './components/bottomNavBar/BottomNavBar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <SectionName title={'home'} />
      <TopNavBar />
      {/* <Home /> */}
      <Portfolio />
      <BottomNavBar />
    </>
  )
}

export default App
