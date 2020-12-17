import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Start from './Start';



class App extends React.Component {
  render () {
    
    return (
      <div>
        <Router>
          <Route path="/" exact component={Start}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
