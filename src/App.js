import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/experience/Experiences";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
