import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Promotions from './pages/Promotions';
import HallOfFame from './pages/HallOfFame';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import QnA from './pages/QnA';
import Consulting from './pages/Consulting';
import SchoolDetail from './pages/SchoolDetail';
import TimeTable from './pages/TimeTable';
import Curriculum from './pages/Curriculum';
import MovieDay from './pages/MovieDay';
import HalloweenEvent from './pages/HalloweenEvent';
import PreHighSchool from './pages/PreHighSchool';
import WinterProgram2026 from './pages/WinterProgram2026';
import WinterSchool from './pages/WinterSchool';
import High3Guide from './pages/High3Guide';
import FacilityDetail from './pages/FacilityDetail';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facility/:facilityId" element={<FacilityDetail />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/movie-day" element={<MovieDay />} />
          <Route path="/events/halloween" element={<HalloweenEvent />} />
          <Route path="/events/pre-highschool" element={<PreHighSchool />} />
          <Route path="/winter-program-2026" element={<WinterProgram2026 />} />
          <Route path="/winter-school" element={<WinterSchool />} />
          <Route path="/high3-guide" element={<High3Guide />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/school/:schoolName" element={<SchoolDetail />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
