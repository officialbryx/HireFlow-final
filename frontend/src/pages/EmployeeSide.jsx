import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import JobPost from "../pages/JobPost";
import SettingsPage from "../pages/SettingsPage";

function EmployeeSide() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* Default Route - Redirect to Dashboard */}
        <Route index element={<Navigate to="/employee/dashboard-employee" replace />} />
        <Route path="dashboard-employee" element={<div className="page-content">
        <h2>Dashboard Page</h2>
        </div>} />
        <Route path="job-post" element={<JobPost />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default EmployeeSide;
