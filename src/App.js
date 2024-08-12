import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Info } from './components/info/Info';


function App() {
  return (
    <div className="App">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
      <div className="split left">
        <Info />
      </div>

      <div className="split right">
        <h1>rihght</h1>
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
    // PROJECT HIGHLIGHTS
    // projects component
    // project box component 
    // PROJECT TABLE
    // project table component
    // project need data/links
  );
}

export default App;
