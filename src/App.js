import Header from './Header'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <Router className= "container">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="*" element={<Header />}/>
      </Routes>
    </Router>
  );
}

export default App;
