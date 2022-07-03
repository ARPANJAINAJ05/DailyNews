import './App.css';

import React, { Component } from 'react';
import NewsBox from './components/NewsBox';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pagesize=15;
  apiKey="ee75082dde5f4ef6b4dd715005639cc2";
 
  render() {
    return (
    
    <div>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path="/"  element={<NewsBox key="general" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="general"/>}> </Route>
          <Route exact path="/business"element={ <NewsBox  key="business"  country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="business"/>}>  </Route>
          <Route exact path="/entertainment"  element={<NewsBox key="entertainment" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="entertainment"/>}>  </Route>
          <Route exact path="/general" element={<NewsBox  key="general" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="general"/>}>  </Route>
          <Route exact path="/health"  element={<NewsBox key="health" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="health"/>}>  </Route>
          <Route exact path="/sports" element={<NewsBox  key="sports"  country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="sports"/>}> </Route>
          <Route exact path="/technology"element={<NewsBox  key="technology" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="technology"/>}>  </Route>
          <Route exact path="/science" element={<NewsBox  key="science" country="in" apiKey={this.apiKey} pagesize={this.pagesize} category="science"/>}>  </Route>
        </Routes>
  
  </Router>
  </div>
  )
  }
}