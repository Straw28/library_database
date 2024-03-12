import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  
  return (
    <Router>
      
        <Switch> //makes sure only one route shows at a time
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      
    </Router>
    // <div>
    //   <Home/>
    // </div>

  );
}

export default App;
