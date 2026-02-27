import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import PutMeOnConcept from './pages/PutMeOnConcept';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/jf_portfolio" element={<Portfolio />} />
        <Route path="/put_me_on" element={<PutMeOnConcept />} />
      </Routes>
    </Router>
  );
};

export default App;
