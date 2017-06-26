import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

export default class App extends React.Component {
  render() {
    return (<BrowserRouter>
    	<div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      	</div>
      </BrowserRouter>);
  }
}