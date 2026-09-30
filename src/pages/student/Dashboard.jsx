import React from 'react';

function Dashboard() {
    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <div className="d-flex align-items-center gap-3">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Student Dashboard</h4>
                </div>
                
                {/* Search Bar & User Controls */}
                <div className="d-flex align-items-center gap-4">
                    <div className="input-group" style={{ width: "280px" }}>
                        <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                            <i className="bi bi-search" style={{ fontSize: "12px" }}></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control bg-light border-start-0 shadow-none text-muted" 
                            placeholder="Quick search items..." 
                            style={{ fontSize: "13px" }}
                        />
                    </div>

                    <span className="text-muted fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }}>
                        Safe Zone Map
                    </span>

                    <div className="position-relative cursor-pointer">
                        <i className="bi bi-bell fs-5 text-secondary"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                            3
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-2 border-start ps-3">
                        <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "36px", height: "36px", fontSize: "14px" }}>
                            MS
                        </div>
                        <div className="lh-1">
                            <div className="fw-bold" style={{ fontSize: "13px", color: "#1B2A4A" }}>Maria S.</div>
                            <div className="text-muted" style={{ fontSize: "11px" }}>ID: 948271</div>
                        </div>
                        <i className="bi bi-chevron-down text-muted ms-1" style={{ fontSize: "11px" }}></i>
                    </div>
                </div>
            </div>

            {/* MAIN DASHBOARD CONTENT GRID */}
            <div className="row g-4">
                
                {/* LEFT / CENTER MAIN COLUMN */}
                <div className="col-lg-8">
                    
                    {/* WELCOME BANNER */}
                    <div className="p-4 rounded text-white mb-4 position-relative overflow-hidden shadow-sm" style={{ backgroundColor: "#1B2A4A" }}>
                        <div className="position-absolute top-0 end-0 p-3 text-white-50" style={{ fontSize: "12px" }}>
                            Thursday, September 28
                        </div>
                        <h3 className="fw-bold mb-2" style={{ fontSize: "22px" }}>Welcome back, Maria!</h3>
                        <p className="text-white-50 mb-0" style={{ fontSize: "13px", maxWidth: "500px" }}>
                            You have 2 items with new potential match updates today. Keep the campus safe and trustworthy!
                        </p>
                    </div>

                    {/* METRICS STATS CARDS */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-3">
                            <div className="card border shadow-sm p-3 h-100 bg-white">
                                <div className="text-muted mb-1" style={{ fontSize: "12px" }}>
                                    My Lost Reports <span className="badge bg-danger-subtle text-danger ms-1" style={{ fontSize: "9px" }}>1 pending match</span>
                                </div>
                                <div className="fw-bold fs-3" style={{ color: "#1B2A4A" }}>3</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border shadow-sm p-3 h-100 bg-white">
                                <div className="text-muted mb-1" style={{ fontSize: "12px" }}>
                                    My Found Reports <span className="badge bg-success-subtle text-success ms-1" style={{ fontSize: "9px" }}>Verified item</span>
                                </div>
                                <div className="fw-bold fs-3" style={{ color: "#1B2A4A" }}>1</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border shadow-sm p-3 h-100 bg-white">
                                <div className="text-muted mb-1" style={{ fontSize: "12px" }}>
                                    Active Claims <span className="badge bg-warning-subtle text-warning-emphasis ms-1" style={{ fontSize: "9px" }}>Under review</span>
                                </div>
                                <div className="fw-bold fs-3" style={{ color: "#1B2A4A" }}>2</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border shadow-sm p-3 h-100 bg-white">
                                <div className="text-muted mb-1" style={{ fontSize: "12px" }}>
                                    Items Returned <span className="badge bg-info-subtle text-info ms-1" style={{ fontSize: "9px" }}>LNF-Hero Level</span>
                                </div>
                                <div className="fw-bold fs-3" style={{ color: "#1B2A4A" }}>5</div>
                            </div>
                        </div>
                    </div>

                    {/* POTENTIAL SYSTEM MATCHES SECTION */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold mb-0" style={{ fontSize: "16px", color: "#1B2A4A" }}>Potential System Matches</h5>
                            <span className="text-primary fw-semibold" style={{ fontSize: "12px", cursor: "pointer" }}>Configure Auto-Match Alerts</span>
                        </div>

                        <div className="row g-3">
                            {/* Match Card 1 */}
                            <div className="col-md-6">
                                <div className="card border shadow-sm p-3 bg-white h-100">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>ELECTRONICS</span>
                                        <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>87% Match</span>
                                    </div>
                                    <div className="text-muted mb-1" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Your Reported Lost</div>
                                    
                                    <div className="d-flex align-items-center gap-2 my-2">
                                        <div className="bg-light rounded border p-1 text-center flex-grow-1" style={{ height: "70px" }}>
                                            <span className="text-muted small" style={{ fontSize: "10px" }}>Phone Img</span>
                                        </div>
                                        <i className="bi bi-arrow-right text-muted"></i>
                                        <div className="bg-light rounded border p-1 text-center flex-grow-1" style={{ height: "70px" }}>
                                            <span className="text-muted small" style={{ fontSize: "10px" }}>Found Img</span>
                                        </div>
                                    </div>

                                    <h6 className="fw-bold mb-1" style={{ fontSize: "13px", color: "#1B2A4A" }}>iPhone 15 Pro Max</h6>
                                    <div className="text-muted mb-3" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Library Lounge overlo...</div>
                                    
                                    <button className="btn text-white w-100 py-1.5 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>
                                        View Match
                                    </button>
                                </div>
                            </div>

                            {/* Match Card 2 */}
                            <div className="col-md-6">
                                <div className="card border shadow-sm p-3 bg-white h-100">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>KEYS</span>
                                        <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>92% Match</span>
                                    </div>
                                    <div className="text-muted mb-1" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Your Reported Lost</div>
                                    
                                    <div className="d-flex align-items-center gap-2 my-2">
                                        <div className="bg-light rounded border p-1 text-center flex-grow-1" style={{ height: "70px" }}>
                                            <span className="text-muted small" style={{ fontSize: "10px" }}>Keys Img</span>
                                        </div>
                                        <i className="bi bi-arrow-right text-muted"></i>
                                        <div className="bg-light rounded border p-1 text-center flex-grow-1" style={{ height: "70px" }}>
                                            <span className="text-muted small" style={{ fontSize: "10px" }}>Ring Img</span>
                                        </div>
                                    </div>

                                    <h6 className="fw-bold mb-1" style={{ fontSize: "13px", color: "#1B2A4A" }}>House Keys with Tag</h6>
                                    <div className="text-muted mb-3" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Student Union Overlap</div>
                                    
                                    <button className="btn text-white w-100 py-1.5 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>
                                        View Match
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUICK SYSTEM ACTIONS */}
                    <div className="card border shadow-sm p-3 bg-white">
                        <h6 className="fw-bold mb-3" style={{ fontSize: "14px", color: "#1B2A4A" }}>Quick System Actions</h6>
                        <div className="d-flex gap-2">
                            <button className="btn text-white px-3 py-2 fw-semibold d-flex align-items-center gap-2" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>
                                Report Lost Item <i className="bi bi-arrow-right"></i>
                            </button>
                            <button className="btn btn-outline-secondary px-3 py-2 fw-semibold" style={{ fontSize: "12px", borderRadius: "6px", color: "#1B2A4A" }}>
                                Report Found Item <i className="bi bi-plus"></i>
                            </button>
                            <button className="btn btn-outline-secondary px-3 py-2 fw-semibold" style={{ fontSize: "12px", borderRadius: "6px", color: "#1B2A4A" }}>
                                Browse All Database <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDEBAR PANEL */}
                <div className="col-lg-4">
                    
                    {/* RECENT DATABASE ACTIVITY */}
                    <div className="card border shadow-sm p-3 bg-white mb-4">
                        <h6 className="fw-bold mb-3" style={{ fontSize: "14px", color: "#1B2A4A" }}>Recent Database Activity</h6>
                        
                        <div className="d-flex flex-column gap-3" style={{ fontSize: "12px" }}>
                            <div className="border-bottom pb-2">
                                <div><span className="text-success fw-bold">•</span> Your report 'iPhone 15' was verified by Offic...</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>Today, 10:30 AM</div>
                            </div>
                            <div className="border-bottom pb-2">
                                <div><span className="text-warning fw-bold">•</span> New potential match auto-generated (87%)</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>Today, 09:15 AM</div>
                            </div>
                            <div className="border-bottom pb-2">
                                <div><span className="text-dark fw-bold">•</span> Claim status updated to "Under Staff Review"</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>Yesterday</div>
                            </div>
                            <div className="border-bottom pb-2">
                                <div><span className="text-dark fw-bold">•</span> Found Item 'Brass Carabiner' reported near...</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>Yesterday</div>
                            </div>
                            <div>
                                <div><span className="text-dark fw-bold">•</span> Maria claimed ownership of 'Black Gym Bag'</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>3 days ago</div>
                            </div>
                        </div>
                    </div>

                    {/* UNREAD ALERTS */}
                    <div className="card border shadow-sm p-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="fw-bold mb-0" style={{ fontSize: "14px", color: "#1B2A4A" }}>Unread Alerts</h6>
                            <span className="badge bg-danger text-white" style={{ fontSize: "9px" }}>3 New</span>
                        </div>

                        <div className="d-flex flex-column gap-2" style={{ fontSize: "12px" }}>
                            <div className="p-2 bg-light rounded border">
                                <div className="fw-bold" style={{ fontSize: "12px", color: "#1B2A4A" }}>Verify claim identity</div>
                                <div className="text-muted" style={{ fontSize: "11px" }}>Please submit your serial number to complete validation.</div>
                            </div>
                            <div className="p-2 bg-light rounded border">
                                <div className="fw-bold" style={{ fontSize: "12px", color: "#1B2A4A" }}>Safe Handback Schedule</div>
                                <div className="text-muted" style={{ fontSize: "11px" }}>Staff approved pick-up at Library Main Desk 2B.</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;