import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProOne from './ProOne';

const ProAll = () => {
  return (
    <div>
    <Router>
  <Routes>
   
  <Route exact path="/one" element={<ProOne />} />

  </Routes>
 </Router> 
    </div>
  )
}

export default ProAll