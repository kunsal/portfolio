import React from "react";
import "./App.css";
import Navbar from './components/navBar';
import NotFound from './components/notFound';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Project from "./components/project";

function App() {
  const pages = [
    {name: 'Home', link: '/', component: Home},
    {name: 'About', link: '/about', component: About},
    {name: 'Projects', link: '/projects', component: Projects},
    {name: 'Contact', link: '/contact', component: Contact},
  ];
  return (
  <Router>
    <Navbar pages={pages}/> 
    <main>
      <Switch>
        <Route path = "/project/:id" component={Project} />
        {pages.map(page => ( <Route path={page.link} exact component={page.component} key={page.link} />
          ))} 
        <Route path = "/not-found" component={NotFound} /> 
        {/* <Redirect from = "/" exact to = "/movies" /> */}
        <Redirect to="/not-found" />
      </Switch> 
    </main> 
  </Router> 
  );
}

export default App;