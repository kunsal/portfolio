import React from "react";
import "./App.css";
import NotFound from './components/notFound';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Spinner from "./components/spinner";
import pages from './helpers/pages';

function App(props) {

  return (
  <Router>
    <Spinner /> 
    <div className="wrapper">
      <Switch>
        {/* <Route path = "/project/:id" component={Project} /> */}
        {pages.map(page => ( <Route path={page.link} exact component={page.component} key={page.link} options={page.options}/>
          ))} 
        <Route path = "/not-found" component={NotFound} /> 
        
        <Redirect to="/not-found" />
      </Switch> 
    </div> 
  </Router> 
  );
}

export default App;