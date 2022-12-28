import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Category key="top" category="" />} />
            <Route exact path='/business' element={<Category key="business" category="business" />} />
            <Route exact path='/entertainment' element={<Category key="entertainment" category="entertainment" />} />
            <Route exact path='/general' element={<Category key="general" category="general" />} />
            <Route exact path='/health' element={<Category key="health" category="health" />} />
            <Route exact path='/science' element={<Category key="science" category="science" />} />
            <Route exact path='/sports' element={<Category key="sports" category="sports" />} />
            <Route exact path='/technology' element={<Category key="technology" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;