import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Info } from './components/info/Info';
import { About } from './components/about/About'
import { Experiences } from './components/experiences/Experiences';
import { Projects } from './components/projects/Projects';
import { ProjectTable } from './components/projectTable/ProjectTable';

function App() {
  return (
    <div className="App">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
      <div className="split left">
        <h1>left</h1>
        <Info />
      </div>

      <div className="split right">
        <h1>right</h1>
        <About />
        <Experiences />
        <Projects />
        <ProjectTable />
      </div>
    </div>
    // flex box?
    // throw in assests, update reesume
    // left side information component
    // RIGHT SIDE contains a component on the right and left of a line
    //  the left contains dates and information
    //  the right contains an image and a link 
    // right side experiences component
    // experience box component
    // experience needs data/links
    // projects component
    // project box component 
    // PROJECT TABLE
    // project table component
    // project need data/links
  );
}

export default App;
