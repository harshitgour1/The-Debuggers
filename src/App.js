import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from './pages/HeroPage'; // Import HeroPage
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import AlumniPage from './pages/AlumniPage';
import AdminPage from './pages/AdminPage';
import 'animate.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} /> {/* Add HeroPage as the home page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
