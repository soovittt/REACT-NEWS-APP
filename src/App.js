import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category';
import LoadingBar from 'react-top-loading-bar';
import Filters from './components/Filters';
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

  state={
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color='red' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
          <Filters/>
          <Routes>
            <Route exact path='/' element={<Category key="top" category="" setProgress={this.setProgress}/>} />
            <Route exact path='/business' element={<Category key="business" category="business"setProgress={this.setProgress}  />} />
            <Route exact path='/entertainment' element={<Category key="entertainment" category="entertainment" setProgress={this.setProgress} />} />
            <Route exact path='/general' element={<Category key="general" category="general" setProgress={this.setProgress} />} />
            <Route exact path='/health' element={<Category key="health" category="health" setProgress={this.setProgress} />} />
            <Route exact path='/science' element={<Category key="science" category="science" setProgress={this.setProgress} />} />
            <Route exact path='/sports' element={<Category key="sports" category="sports" setProgress={this.setProgress} />} />
            <Route exact path='/technology' element={<Category key="technology" category="technology" setProgress={this.setProgress} />} />
          </Routes>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;