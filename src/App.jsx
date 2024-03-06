import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <> 
      <Navbar/>
      <Welcome/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
