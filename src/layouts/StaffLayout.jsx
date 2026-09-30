import { Outlet } from "react-router-dom";
import StaffSidebar from "../components/StaffSidebar";

function StaffLayout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <StaffSidebar />

            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
    );
}

export default StaffLayout;