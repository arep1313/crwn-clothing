import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

/*const HatsDetail = (props) => (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.HatsId}</h1>
  </div>
)*/

function App() {
  // Exact is a true or false property. If true or not specified, it has to be exactly equal to the path. 
  //Without exact, if for example path='/', and we put '/hats' in the url, it will still render the homepage. 
  //what Switch does is that, the moment it finds a match, it will not render the rest. 
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
