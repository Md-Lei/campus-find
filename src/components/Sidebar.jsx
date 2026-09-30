import React from 'react';
import { NavLink } from 'react-router-dom'; 
import loginLogo from "../assets/loginLogo.png";

function Sidebar() {
    // Helper function to keep your active link styling clean and reusable
    const getLinkStyle = ({ isActive }) => ({
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
        borderRadius: "8px",
        fontSize: "14px"
    });

    return (
        <div className="d-flex flex-column text-white p-3 vh-100 flex-shrink-0" style={{ backgroundColor: "#1B2A4A", width: "260px", position: "sticky", top: "0" }}>
            {/* LOGO SECTION */}
            <div className="d-flex align-items-center gap-2 px-2 py-2 mb-3">
                <img
                    src={loginLogo}
                    alt="Campus Lost and Found Logo"
                    style={{ height: "26px", width: "auto" }}
                />
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>CampusFind</span>
            </div>

            {/* NAVIGATION LINKS USING NavLink */}
            <ul className="nav nav-pills flex-column gap-1 mb-auto">
                <li className="nav-item">
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-grid-1x2-fill"></i> Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/browse" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-search"></i> Browse Items
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/report" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-plus-lg"></i> Report Item
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/my-reports" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-file-text"></i> My Reports
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/my-claims" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-shield-check"></i> My Claims
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/notifications" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-bell"></i> Notifications
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/messages" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-chat-dots"></i> Messages
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/profile" 
                        className={({ isActive }) => `nav-link d-flex align-items-center gap-3 py-2 px-3 ${isActive ? 'text-white active' : 'text-white-50'}`}
                        style={getLinkStyle}
                    >
                        <i className="bi bi-person"></i> Profile
                    </NavLink>
                </li>
            </ul>

            {/* FOOTER INFO */}
            <div className="px-2 pt-2 border-top border-secondary text-white-50" style={{ fontSize: "11px" }}>
                <div className="fw-bold text-white mb-1" style={{ letterSpacing: "0.5px" }}>SYSTEM V1.0</div>
                <div>University Endorsed</div>
            </div>
        </div>
    );
}

export default Sidebar;