import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Intro from './component/Intro';
import Function from './component/Function';
import Price from './component/Price';
import Footer from './component/Footer';
import Feedback from './component/Feedback';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/features" element={<Function />} />
            <Route path="/price" element={<Price />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
