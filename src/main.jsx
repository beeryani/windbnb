import React from 'react';
import ReactDOM from 'react-dom/client';
import Drawercomponent from './components/Drawercomponent';
import Heading from './components/Heading';
import Searchbox from './components/Searchbox';
import Topdrawer from './components/Topdrawer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading />
    {/* <div className="searchbox">
      <Searchbox />
    </div>
    <Topdrawer /> */}
    <Drawercomponent />
  </React.StrictMode>
);
