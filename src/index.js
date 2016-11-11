import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './App';
import Footer from './Footer'
import './main.css';


jQuery(function() {
    ReactDOM.render(
        <div>
          <App />
          <Footer />
        </div>,
      document.getElementById('root')
    );
});