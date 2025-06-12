// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Elevation from './Pages/Elevation';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Elevation />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
