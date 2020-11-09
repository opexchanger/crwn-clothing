import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Item</h1>
          <span className="subtitle">Caption</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Item 2</h1>
          <span className="subtitle">Caption</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Item 3</h1>
          <span className="subtitle">Caption</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Item 4</h1>
          <span className="subtitle">Caption</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Item 5</h1>
          <span className="subtitle">Caption</span>
        </div>
      </div>
      
    </div>
  </div>
);

export default HomePage;