import './App.css'
import TopNavBar from './components/topNavBar/TopNavBar';
import BottomNavBar from './components/bottomNavBar/BottomNavBar';
import Home from './components/home/Home';
import SectionName from './components/sectionName/SectionName';

function App() {
  return (
    <>
      <SectionName title={'home'}/>
      <TopNavBar />
      <Home />
      <BottomNavBar />
    </>
  )
}

export default App
