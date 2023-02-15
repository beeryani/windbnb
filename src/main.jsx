import React from 'react';
import ReactDOM from 'react-dom/client';
import Drawercomponent from './components/Drawercomponent';
import Heading from './components/Heading';
import Listing from './components/Listing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading />
    <Drawercomponent />
    <Listing />
  </React.StrictMode>
);
