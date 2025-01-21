import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container" >
      
      <Hero/>
      <Card/>
      
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
