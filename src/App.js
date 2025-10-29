import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotHome from './pages/NotHome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nothome" element={<NotHome />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
