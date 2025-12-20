import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Promotions from './pages/Promotions';
import HallOfFame from './pages/HallOfFame';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import QnA from './pages/QnA';
import Consulting from './pages/Consulting';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
