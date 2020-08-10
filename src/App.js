import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home/Home.component';
import { About } from './About/About.component';
import { Contact } from './Components/Contact/contact.component';
import { Careers } from './Components/Careers/careers.component';
import { Layout } from './Layout.component';
import { NavigationBar } from './Components/Navigation/navigation.component';
import { Header } from './Components/Header/header.component';

import './App.css';



class App extends Component {
  render() {
    return (
   <React.Fragment>
     <NavigationBar/>
     
     <Layout class='App'>
<Router>
  <Switch>
    <Route exact path ="" component = {Home}></Route>
    <Route exact path ="/about" component = {About}></Route>
    <Route exact path ="/contact" component = { Contact } ></Route>
    <Route exact path ="/careers" component = { Careers }></Route>
    
  </Switch>
</Router>
</Layout>
   </React.Fragment>
  );
}
}
export default App;
