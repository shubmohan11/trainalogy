
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


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <WhoWeAre />
                <WhyChooseUs />
                <ExclusiveWorkouts />
                <Features />
                <Programs />
                <Trainers />
                <Pricing />
                <Gallery />
              </>
            } />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
