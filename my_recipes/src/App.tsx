import React, { ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Breakfast from 'pages/Breakfast/Breakfast';
import Dessert from 'pages/Dessert/Dessert';
import Drink from 'pages/Drink/Drink';
import HomePage from 'pages/HomePage/HomePage';
import Semolina from 'pages/InfoPage/Breakfast/Semolina/Semolina';
import Cutlet from 'pages/InfoPage/Lunch/Cutlet/Cutlet';
import Shawarma from 'pages/InfoPage/Lunch/Shawarma/Shawarma';
import Lunch from 'pages/Lunch/Lunch';

import './App.css';
import './styles/normalize.css';
import './styles/index.css';

const App = (): ReactElement => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/breakfast/semolina" element={<Semolina />} />
      <Route path="/lunch/cutlet" element={<Cutlet />} />
      <Route path="/lunch/shawarma" element={<Shawarma />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/drink" element={<Drink />} />
    </Routes>
  );
};

export default App;
