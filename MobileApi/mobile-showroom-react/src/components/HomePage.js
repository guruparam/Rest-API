// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/next-page">Go to Next Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
