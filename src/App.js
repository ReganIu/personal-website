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
          <Route path="/" exact component={Intro} />
          <Route path="/" exact component={Navigation} />
          <Route path="/" exact component={About} />
          <Route path="/" exact component={Projects} />


        </Router>
      </div>
    );
  }
}

export default App;
