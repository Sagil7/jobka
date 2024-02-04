import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navabar/Navbar';
import Aboutpage from './Pages/Aboutpage';
import Home from './Pages/Home';
import Contactpage from './Pages/Contactpage';
import Servicespage from './Pages/Servicespage';
import Clientzone from './Pages/Clientzone';
import Candidatezone from './Pages/Candidatezone';

function App() {
  return (
    <>
    <Navbar/>
    
   
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/services" element={<Servicespage/>} />
        <Route path="/clientzone" element={<Clientzone/>} />
        <Route path="/candidate" element={<Candidatezone/>} />
        <Route path="/contact" element={<Contactpage/>} />
       
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
