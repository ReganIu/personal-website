import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './sections/NavBar/Navigation';
import Intro from './sections/Intro/Intro';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';



class App extends React.Component {
  render () {
    
    return (
      <div>
        
          
          <Router>
            <div id="intro"> 
            <Route path="/" exact component={Intro} ></Route>
            </div>
            <Route exact component={Navigation} />
            <div id="about">
            <Route path="/" exact component={About} ></Route>
            </div>
            <div id="projects">
            <Route path="/" exact component={Projects} ></Route>
            </div>


          </Router>
        
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
