import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import StudentLayout from "./layouts/StudentLayout";
import Dashboard from "./pages/student/Dashboard";
import BrowseItems from "./pages/student/BrowseItems";
import ReportItem from "./pages/student/ReportItem";
import MyReports from "./pages/student/MyReports";
import MyClaims from "./pages/student/MyClaims";
import Notifications from "./pages/student/Notifications";
import Messages from "./pages/student/Messages";
import Profile from "./pages/student/Profile";

import StaffLayout from "./layouts/StaffLayout";
import StaffDashboard from "./pages/staff/StaffDashboard";
import PendingReports from "./pages/staff/PendingReports";
import Claims from "./pages/staff/Claims";
import StaffMessages from "./pages/staff/StaffMessages";

function App() {
    return (
        // <BrowserRouter basename="/campus-find"> (back in online)
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<StudentLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/browse" element={<BrowseItems />} />
                    <Route path="/report" element={<ReportItem />} />
                    <Route path="/my-reports" element={<MyReports />} />
                    <Route path="/my-claims" element={<MyClaims />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                {/* STAFF AREA */}
                <Route element={<StaffLayout />}>
                    <Route path="/staff/dashboard" element={<StaffDashboard />} />
                    <Route path="/staff/reports" element={<PendingReports />} />
                    <Route path="/staff/claims" element={<Claims />} />
                    <Route path="/staff/messages" element={<StaffMessages />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;