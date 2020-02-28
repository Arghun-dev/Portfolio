import React from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import Contact from './pages/Contact/Contact';
import MySkills from './pages/MySkills/MySkills';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/myskills' component={MySkills} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
