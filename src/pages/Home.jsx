import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Welcome/>
        <Project/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;