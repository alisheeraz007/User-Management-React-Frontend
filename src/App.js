import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/header';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import List from './components/List';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
      </Router>
    </Provider>
  );
}

export default App;
