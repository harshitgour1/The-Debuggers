import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import LandingPage from "./pages/LandingPage";
import RoleLoginPage from "./pages/RoleLoginPage";
import AdminPage from "./pages/AdminPage";  // New AdminPage
import StudentPage from "./pages/StudentPage";  // New StudentPage
import AlumniPage from "./pages/AlumniPage";  // New AlumniPage

function App() {
  return (
    <Router>
      <Routes>
        {/* Hero Page */}
        <Route path="/" element={<HeroPage />} />

        {/* Landing Page */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Role-based Login Pages */}
        <Route path="/login/admin" element={<RoleLoginPage role="admin" />} />
        <Route path="/login/student" element={<RoleLoginPage role="student" />} />
        <Route path="/login/alumni" element={<RoleLoginPage role="alumni" />} />

        {/* Role Pages */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
    </Router>
  );
}

export default App;