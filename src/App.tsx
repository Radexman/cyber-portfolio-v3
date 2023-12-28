import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDisplay from './ProjectDisplay';

function App() {
  return (
    <div className="text-3xl font-bold uppercase">
      <div className="mb-5 flex items-center justify-start border-2 border-slate-600 bg-red-200 p-4 text-violet-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:id" element={<ProjectDisplay />} />
        </Routes>
      </div>
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
