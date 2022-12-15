import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { AnimatePresence } from "framer-motion";
import Transition from './components/Transition';
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Us from './pages/Us';
import Projects from './pages/Projects';

function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
    
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

    return (
      
      <main className="App">
        <Navbar/>
        <Sidebar/>
        <AnimatePresence>
          {loaded ? null : <Transition/>}
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false} >
          <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/us' element={<Us/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
            </Routes>
        </AnimatePresence>

      </main>
    
  );
}

export default App;
