import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/AboutUs';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DrinkProvider } from '../ContentContext/DrinkContent';
import { IceCreamProvider } from '../ContentContext/IceCreamContext';
import { CoffeeProvider } from '../ContentContext/CoffeeContent';
import CoffeeMenu from './screens/CoffeeMenu';
import IcecreamMenu from './screens/IcecreamMenu';
import DrinkMenu from './screens/DrinkMenu';
import Form from './screens/Form.jsx';
import AllFeedbacks from './screens/allFeedbacks.jsx';

function App() {
  return (
    <CoffeeProvider>
      <DrinkProvider>
        <IceCreamProvider>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route
                path="/"
                element={<Home></Home>}
              ></Route>
              <Route
                path="/aboutus"
                element={<AboutUs></AboutUs>}
              ></Route>
              <Route
                path="/menu/coffee"
                element={<CoffeeMenu></CoffeeMenu>}
              ></Route>
              <Route
                path="/menu/icecream"
                element={<IcecreamMenu></IcecreamMenu>}
              ></Route>
              <Route
                path="/menu/drink"
                element={<DrinkMenu></DrinkMenu>}
              ></Route>

              <Route
                path="/addfeedback"
                element={<Form></Form>}
              ></Route>
              <Route
                path="/allfeedback"
                element={<AllFeedbacks></AllFeedbacks>}
              ></Route>
            </Routes>
            <ToastContainer
              position="top-center"
              autoClose={2000}
            />
          </Router>
        </IceCreamProvider>
      </DrinkProvider>
    </CoffeeProvider>
  );
}

export default App;
