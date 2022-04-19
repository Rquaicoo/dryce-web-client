import Header from './components/Navbar/Header'
import Services from './components/Services/Services';
import About from './components/AboutUs/About'
import Contact from  './components/Contact/Contact'


function App() {
  return (
    
    <div className='container'>
        <Header/>
        <Services/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
