import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Description from './views/DescriptivePart';
import About from './views/About';
import Risks from './views/Risks';
import ScopeSpan from './views/ScopeSpan';

function App() {
  return (
    <Router>
      <Navbar />
        <Link to="/"></Link>
        <Link to="/about"></Link>
        <Link to="/description"></Link>
        <Link to="/risks"></Link>
        <Link to="/scopespan"></Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/description" element={<Description />} />
          <Route exact path="/risks" element={<Risks />} />
          <Route exact path="/scopespan" element={<ScopeSpan />} />
        </Routes>
    </Router>
  );
}

export default App;
