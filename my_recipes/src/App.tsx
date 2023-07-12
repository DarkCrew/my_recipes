import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';

import './App.css';

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
