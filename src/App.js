import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import Points from './components/Points';
import Rules from './components/Rules';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Learnmore from './components/Learnmore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/Points"  element={<Points />} />
          <Route path="/Rules"  element={<Rules />} />
          <Route path="/Learnmore"  element={<Learnmore />} />
          <Route path="/Signin"  element={<Signin />} />
          <Route path="/Signup"  element={<Signup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

