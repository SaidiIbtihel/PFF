import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardUser from "./pages/user/DashboardUser";
import RegisterUser from "./pages/user/RegisterUser";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
function App() {
  return;
  <>
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<DashboardUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerUser" element={<RegisterUser />} />
        </Routes>
      </div>
    </Router>
  </>;
}

export default App;
