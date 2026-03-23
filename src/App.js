import './App.css';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Routers from './routers/Routers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Routers />
      </div>
      {/* <Hero />
      <Featured />
      <Services />
      <Gallery />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
