import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
