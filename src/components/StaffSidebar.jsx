import React from 'react';
import { NavLink } from 'react-router-dom'; 
import loginLogo from "../assets/loginLogo.png";

function StaffSidebar() {
    // Helper function to keep active link styling clean and reusable
    const getLinkStyle = ({ isActive }) => ({
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
        borderRadius: "8px",
        fontSize: "13.5px"
    });

    return (
        <div className="d-flex flex-column text-white p-3 vh-100 flex-shrink-0" style={{ backgroundColor: "#1B2A4A", width: "260px", position: "sticky", top: "0" }}>
            
            {/* LOGO & BRAND SECTION */}
            <div className="d-flex align-items-center gap-2 px-2 py-2 mb-2">
                <img
                    src={loginLogo}
                    alt="Campus Lost and Found Logo"
                    style={{ height: "26px", width: "auto" }}
                />
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>CampusFind</span>
            </div>

            {/* Staff / Moderator Role Badge */}
            <div className="px-2 mb-3">
                <span className="badge text-white fw-semibold px-2.5 py-1 text-uppercase" style={{ backgroundColor: "#6366f1", fontSize: "9.5px", letterSpacing: "0.5px" }}>
                    STAFF / MODERATOR
                </span>
            </div>

            {/* NAVIGATION LINKS USING NavLink */}
            <ul className="nav nav-pills flex-column gap-1 mb-auto">
                <li className="nav-item">
                    <NavLink 
                        to="/staff/dashboard" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-grid fs-6"></i> Staff Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/staff/reports" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-file-text fs-6"></i> Pending Reports
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/staff/claims" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-shield-check fs-6"></i> Pending Claims
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink 
                        to="/staff/item-returns" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-check2-circle fs-6"></i> Item Returns
                    </NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink 
                        to="/staff/messages" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-chat fs-6"></i> Messages
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink 
                        to="/staff/analytics" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2.5 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-bar-chart fs-6"></i> Analytics
                    </NavLink>
                </li> */}
            </ul>

            {/* FOOTER INFO */}
            <div className="px-2 pt-2 border-top border-secondary text-white-50" style={{ fontSize: "11px" }}>
                <div className="fw-bold text-white mb-1" style={{ letterSpacing: "0.5px" }}>SYSTEM V1.0</div>
                <div>University Endorsed</div>
            </div>
        </div>
    );
}

export default StaffSidebar;