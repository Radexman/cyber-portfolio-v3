import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import ProjectDisplay from './ProjectDisplay';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/:id" element={<ProjectDisplay />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default App;
