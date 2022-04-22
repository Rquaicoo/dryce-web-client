import Header from './components/Navbar/Header'
import Services from './components/Services/Services';
import About from './components/AboutUs/About'
import Contact from  './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    
    <div className='container'>
        <Header/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
  );
}

export default App;
