import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DrinkProvider } from '../ContentContext/DrinkContent';
import { IceCreamProvider } from '../ContentContext/IceCreamContext';

function App() {
  return (
    <DrinkProvider>
      <IceCreamProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route
              path="/"
              element={<Home></Home>}
            ></Route>
          </Routes>
        </Router>
      </IceCreamProvider>
    </DrinkProvider>
  );
}

export default App;
