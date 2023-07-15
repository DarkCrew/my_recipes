import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Breakfast from 'pages/Breakfast/Breakfast';
import Dessert from 'pages/Dessert/Dessert';
import Drink from 'pages/Drink/Drink';
import HomePage from 'pages/HomePage/HomePage';
import Semolina from 'pages/InfoPage/Breakfast/Semolina/Semolina';
import Lunch from 'pages/Lunch/Lunch';

import './App.css';
import './styles/normalize.css';
import './styles/index.css';

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/breakfast/semolina" element={<Semolina />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/drink" element={<Drink />} />
    </Routes>
  );
};

export default App;
