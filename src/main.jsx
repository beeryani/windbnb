import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './components/Heading'
import Searchbox from './components/Searchbox'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading />
    <Searchbox />
  </React.StrictMode>,
)
