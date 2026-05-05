import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;