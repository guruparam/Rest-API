// src/components/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Update import statement
import HomePage from './HomePage';
import PostPhoneList from './PostPhoneList';
import GetPhoneModels from './GetPhoneModel';

const AppRouter = () => {
  return (
    <Router>
      <Routes>  {/* Change Switch to Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/next-page" element={<PostPhoneList />} />
        <Route path="/get-page" element={<GetPhoneModels />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
