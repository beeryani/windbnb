import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './components/Heading';
import Searchbox from './components/Searchbox';
import Topdrawer from './components/Topdrawer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading />
    <Searchbox />
    <Topdrawer />
  </React.StrictMode>
);
