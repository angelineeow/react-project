import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Provider store={store}>
          <Header />
          <div className="App">

            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/> 
            </Routes>

          </div>
      </Provider>
    </Router>
  );
}

export default App;