import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import ProjectDisplay from './pages/ProjectDisplay/ProjectDisplay';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen bg-neutral font-cyber">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/:id" element={<ProjectDisplay />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
      <ScrollToTop />
    </AppContextProvider>
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
