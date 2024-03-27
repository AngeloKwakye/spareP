import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Featured } from './components/featured';

function App() {
  return (
   <>
     <Navbar/>
     <Hero/>
     <Featured/>
   </>
  );
}

export default App;
