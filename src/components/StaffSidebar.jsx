import React from 'react';

function StaffSidebar({ activePage = 'dashboard' }) {
    return (
        <div className="d-flex flex-column text-white p-3" style={{ width: "260px", backgroundColor: "#1B2A4A", flexShrink: 0, minHeight: "100vh" }}>
            
            {/* Logo & Brand */}
            <div className="d-flex align-items-center gap-2 mb-3 px-2 pt-2">
                <div className="bg-white text-dark rounded d-flex align-items-center justify-content-center fw-bold" style={{ width: "32px", height: "32px", fontSize: "16px" }}>
                    <i className="bi bi-box-seam text-primary"></i>
                </div>
                <span className="fw-bold fs-5 text-white">CampusFind</span>
            </div>

            {/* Staff / Moderator Role Badge */}
            <div className="px-2 mb-4">
                <span className="badge text-white fw-semibold px-2.5 py-1 text-uppercase tracking-wider" style={{ backgroundColor: "#6366f1", fontSize: "9.5px", letterSpacing: "0.5px" }}>
                    STAFF / MODERATOR
                </span>
            </div>

            {/* Navigation Links */}
            <div className="nav flex-column gap-1 flex-grow-1" style={{ fontSize: "13.5px" }}>
                <a href="#dashboard" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'dashboard' ? 'active' : 'text-opacity-75'}`} style={activePage === 'dashboard' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-grid fs-6 ${activePage === 'dashboard' ? 'text-primary' : ''}`}></i> Staff Dashboard
                </a>
                <a href="#pending-reports" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'pending-reports' ? 'active' : 'text-opacity-75'}`} style={activePage === 'pending-reports' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-file-text fs-6 ${activePage === 'pending-reports' ? 'text-primary' : ''}`}></i> Pending Reports
                </a>
                <a href="#pending-claims" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'pending-claims' ? 'active' : 'text-opacity-75'}`} style={activePage === 'pending-claims' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-shield-check fs-6 ${activePage === 'pending-claims' ? 'text-primary' : ''}`}></i> Pending Claims
                </a>
                <a href="#item-returns" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'item-returns' ? 'active' : 'text-opacity-75'}`} style={activePage === 'item-returns' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-check2-circle fs-6 ${activePage === 'item-returns' ? 'text-primary' : ''}`}></i> Item Returns
                </a>
                <a href="#messages" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'messages' ? 'active' : 'text-opacity-75'}`} style={activePage === 'messages' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-chat fs-6 ${activePage === 'messages' ? 'text-primary' : ''}`}></i> Messages
                </a>
                <a href="#analytics" className={`nav-link text-white d-flex align-items-center gap-3 py-2.5 px-3 rounded ${activePage === 'analytics' ? 'active' : 'text-opacity-75'}`} style={activePage === 'analytics' ? { backgroundColor: "#2b3c60" } : {}}>
                    <i className={`bi bi-bar-chart fs-6 ${activePage === 'analytics' ? 'text-primary' : ''}`}></i> Analytics
                </a>
            </div>

            {/* System Version Footer */}
            <div className="px-2 pt-3 border-top border-secondary text-white text-opacity-50" style={{ fontSize: "11px" }}>
                <div>SYSTEM V1.0</div>
                <div>University Endorsed</div>
            </div>
        </div>
    );
}

export default StaffSidebar;