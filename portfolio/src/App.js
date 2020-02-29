import React from 'react';
import './App.scss';
import Home from './pages/HomePage/Home';
import Contact from './pages/Contact/Contact';
import MySkills from './pages/MySkills/MySkills';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import BasicSkill from './pages/BasicSkill/BasicSkill';
import AdvancedSkill from './pages/AdvancedSkill/AdvancedSkill';
import {Switch, Route} from 'react-router-dom';

import CardProvider from './context/CardContext';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 3000);
  }

  render(){
      return (
        <div className="App">
          <CardProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/aboutme' component={AboutMe} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/myskills' component={MySkills} />
              <Route exact path='/myskills/basic' component={BasicSkill} />
              <Route exact path='/myskills/advance' component={AdvancedSkill} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
            </CardProvider>
        </div>
      ) 
    }
}

export default App;
