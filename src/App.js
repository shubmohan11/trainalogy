
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhyChooseUs from './components/WhyChooseUs';
import ExclusiveWorkouts from './components/ExclusiveWorkouts';
import Features from './components/Features';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    window.addEventListener('hashchange', onHashChange);
    // Scroll on initial load
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home"><Hero /></section>
                <section id="get-to-know"><WhoWeAre /></section>
                <section id="why-choose-us"><WhyChooseUs /></section>
                <section id="exclusive-workouts"><ExclusiveWorkouts /></section>
                <section id="features"><Features /></section>
                <section id="programs"><Programs /></section>
                <section id="trainers"><Trainers /></section>
                <section id="pricing"><Pricing /></section>
                <section id="gallery"><Gallery /></section>
                <section id="contact"><ContactForm /></section>
              </>
            } />
            {/* Removed separate /contact route. ContactForm is now only a section in the main route. */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
