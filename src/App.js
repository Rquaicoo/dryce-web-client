import Header from './components/Navbar/Header'
// import Services from './components/Services/Services';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    // <Router className= "container">
    //   <Routes>
    //     <Route path="/" element={<Header />}/>
    //     <Route path="*" element={<Header />}/>
    //   </Routes>
    // </Router>
    <div className='container'>
        <Header/>
        {/* <Services/> */}
    </div>
  );
}

export default App;
