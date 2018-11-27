import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import User from './components/User';
import PostForm from './components/PostForm';
//import { createStore, applyMiddleware } from 'C:/Users/CIPL0621/AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

import store from './store';
import UserEdit from './components/UserEdit';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Learn React
          </a>
        </header>
        <PostForm/> 
        <hr/>
        {/* <Posts/> */}
        <User/>
      <UserEdit/>
      </div>
      </Provider>
    );
  }
}

export default App;
