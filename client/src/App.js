import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Routes>
              <Route path="/" element={<Fib />} />
              <Route path="/otherpage" element={<OtherPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
