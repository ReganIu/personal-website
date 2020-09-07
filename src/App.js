import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './sections/NavBar/Navigation';

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
        <Route path="/" exact component={Navigation} />


        </Router>
      </div>
    );
  }
}

export default App;
