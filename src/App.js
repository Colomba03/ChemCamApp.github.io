import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Description from './views/Description';
import Risks from './views/Risks';
import ScopeSpan from './views/ScopeSpan';
import Architecture from './views/Architecture';
import Diagrams from './views/Diagrams';

function App() {
  return (
    <Router>
      <Navbar />
        <Link to="/chemcamapp.github.io"></Link>
        <Link to="/about"></Link>
        <Link to="/description"></Link>
        <Link to="/risks"></Link>
        <Link to="/scopespan"></Link>
        <Link to="/archdesign"></Link>
        <Link to="/diagrams"></Link>
        <Routes>
          <Route exact path="/chemcamapp.github.io" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/description" element={<Description />} />
          <Route exact path="/risks" element={<Risks />} />
          <Route exact path="/scopespan" element={<ScopeSpan />} />
          <Route exact path="/archdesign" element={<Architecture />} />
          <Route exact path="/diagrams" element={<Diagrams />} />
        </Routes>
    </Router>
  );
}

export default App;
