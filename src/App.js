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

function App() {
  return (
    <div className="App">
      <Header />
      <main>
  <Hero />
  <WhoWeAre />
  <WhyChooseUs />
  <ExclusiveWorkouts />
  <Features />
        <Programs />
        <Trainers />
        <Pricing />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
