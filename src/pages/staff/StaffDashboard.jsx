import React from 'react';

function StaffDashboard() {
    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>

            {/* MAIN CONTENT AREA */}
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "18px" }}>Staff Dashboard</h4>
                    
                    {/* Search & Officer Profile Header Controls */}
                    <div className="d-flex align-items-center gap-4">
                        <div className="input-group" style={{ width: "280px" }}>
                            <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                                <i className="bi bi-search" style={{ fontSize: "12px" }}></i>
                            </span>
                            <input 
                                type="text" 
                                className="form-control bg-light border-start-0 shadow-none text-muted" 
                                placeholder="Search case number or student ID..." 
                                style={{ fontSize: "13px" }}
                            />
                        </div>

                        <span className="text-muted fw-medium" style={{ fontSize: "13px" }}>
                            Thursday, Sep 17, 2026
                        </span>

                        <div className="d-flex align-items-center gap-2 border-start ps-3">
                            <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold overflow-hidden" style={{ width: "36px", height: "36px" }}>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Officer Dave" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="lh-1">
                                <div className="fw-bold" style={{ fontSize: "13px", color: "#1B2A4A" }}>Officer Dave</div>
                                <div className="text-muted" style={{ fontSize: "11px" }}>Staff ID: CF-9482</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DASHBOARD BODY */}
                <div className="p-4 flex-grow-1">
                    
                    {/* WELCOME BANNER */}
                    <div className="card text-white border-0 shadow-sm rounded p-4 mb-4" style={{ backgroundColor: "#1B2A4A" }}>
                        <h3 className="fw-bold mb-2" style={{ fontSize: "20px" }}>Welcome back, Officer Dave!</h3>
                        <p className="text-white text-opacity-75 mb-0" style={{ fontSize: "13.5px" }}>
                            The portal is fully moderated. There are 20 pending cases awaiting review today.
                        </p>
                    </div>

                    {/* METRIC CARDS ROW */}
                    <div className="row g-3 mb-4">
                        <div className="col-xl-3 col-md-6">
                            <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Pending Reports</span>
                                    <span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-2 py-0.5" style={{ fontSize: "10px" }}>12</span>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <h2 className="fw-bold mb-0 text-dark" style={{ fontSize: "26px" }}>12</h2>
                                    <span className="text-muted" style={{ fontSize: "11.5px" }}>Reports to verify</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Pending Claims</span>
                                    <span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-2 py-0.5" style={{ fontSize: "10px" }}>8</span>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <h2 className="fw-bold mb-0 text-dark" style={{ fontSize: "26px" }}>8</h2>
                                    <span className="text-muted" style={{ fontSize: "11.5px" }}>Claims under review</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Awaiting Pickup</span>
                                    <span className="badge bg-primary bg-opacity-20 text-primary fw-bold px-2 py-0.5" style={{ fontSize: "10px" }}>5</span>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <h2 className="fw-bold mb-0 text-dark" style={{ fontSize: "26px" }}>5</h2>
                                    <span className="text-muted" style={{ fontSize: "11.5px" }}>Ready at safe zone</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Completed Returns</span>
                                    <span className="badge bg-success bg-opacity-20 text-success fw-bold px-2 py-0.5" style={{ fontSize: "10px" }}>23</span>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <h2 className="fw-bold mb-0 text-dark" style={{ fontSize: "26px" }}>23</h2>
                                    <span className="text-muted" style={{ fontSize: "11.5px" }}>Resolved this week</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        
                        {/* LEFT WIDE COLUMN: REQUIRES IMMEDIATE ATTENTION TABLE */}
                        <div className="col-xl-8">
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-4" style={{ fontSize: "15px" }}>Requires Immediate Attention</h5>

                                <div className="table-responsive">
                                    <table className="table align-middle mb-0" style={{ fontSize: "13px" }}>
                                        <thead>
                                            <tr className="text-muted border-bottom" style={{ fontSize: "12px" }}>
                                                <th className="fw-semibold pb-3 ps-0">Case #</th>
                                                <th className="fw-semibold pb-3">Item Name</th>
                                                <th className="fw-semibold pb-3">Type</th>
                                                <th className="fw-semibold pb-3">Priority</th>
                                                <th className="fw-semibold pb-3 text-end pe-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-bottom">
                                                <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000130</td>
                                                <td className="text-dark">iPhone 15 Pro Max</td>
                                                <td className="text-muted">Report</td>
                                                <td><span className="badge bg-danger bg-opacity-15 text-danger fw-bold px-3 py-1" style={{ fontSize: "11px" }}>High</span></td>
                                                <td className="text-end pe-0"><button className="btn btn-sm text-white px-3 py-1 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>Review</button></td>
                                            </tr>
                                            <tr className="border-bottom">
                                                <td className="fw-bold text-dark ps-0 py-3">CLM-2026-000089</td>
                                                <td className="text-dark">Brass Keyring with Carabiner</td>
                                                <td className="text-muted">Claim</td>
                                                <td><span className="badge bg-danger bg-opacity-15 text-danger fw-bold px-3 py-1" style={{ fontSize: "11px" }}>High</span></td>
                                                <td className="text-end pe-0"><button className="btn btn-sm text-white px-3 py-1 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>Review</button></td>
                                            </tr>
                                            <tr className="border-bottom">
                                                <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000135</td>
                                                <td className="text-dark">North Face Backpack</td>
                                                <td className="text-muted">Report</td>
                                                <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                                <td className="text-end pe-0"><button className="btn btn-sm text-white px-3 py-1 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>Review</button></td>
                                            </tr>
                                            <tr className="border-bottom">
                                                <td className="fw-bold text-dark ps-0 py-3">CLM-2026-000091</td>
                                                <td className="text-dark">Student ID (S. Patel)</td>
                                                <td className="text-muted">Claim</td>
                                                <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                                <td className="text-end pe-0"><button className="btn btn-sm text-white px-3 py-1 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>Review</button></td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000139</td>
                                                <td className="text-dark">Wireless Earbuds Case</td>
                                                <td className="text-muted">Report</td>
                                                <td><span className="badge bg-info bg-opacity-20 text-info fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Low</span></td>
                                                <td className="text-end pe-0"><button className="btn btn-sm text-white px-3 py-1 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>Review</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: RECENT ACTIVITY LOG & WEEKLY CATEGORY MIX */}
                        <div className="col-xl-4 d-flex flex-column gap-4">
                            
                            {/* Recent Activity Log */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Recent Activity Log</h5>
                                
                                <div className="d-flex flex-column gap-3" style={{ fontSize: "12.5px" }}>
                                    <div className="pb-3 border-bottom">
                                        <div className="d-flex align-items-start gap-2 text-dark">
                                            <span className="badge bg-primary rounded-circle p-1 mt-1" style={{ width: "6px", height: "6px" }}></span>
                                            <div>
                                                Report <span className="fw-semibold">LNF-2026-000130</span> verified by you
                                                <div className="text-muted mt-0.5" style={{ fontSize: "11px" }}>Just now</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-3 border-bottom">
                                        <div className="d-flex align-items-start gap-2 text-dark">
                                            <span className="badge bg-primary rounded-circle p-1 mt-1" style={{ width: "6px", height: "6px" }}></span>
                                            <div>
                                                Claim <span className="fw-semibold">CLM-2026-000089</span> approved
                                                <div className="text-muted mt-0.5" style={{ fontSize: "11px" }}>10 min ago</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pb-3 border-bottom">
                                        <div className="d-flex align-items-start gap-2 text-dark">
                                            <span className="badge bg-primary rounded-circle p-1 mt-1" style={{ width: "6px", height: "6px" }}></span>
                                            <div>
                                                Item returned to <span className="fw-semibold">Maria S.</span>
                                                <div className="text-muted mt-0.5" style={{ fontSize: "11px" }}>1 hour ago</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="d-flex align-items-start gap-2 text-dark">
                                            <span className="badge bg-primary rounded-circle p-1 mt-1" style={{ width: "6px", height: "6px" }}></span>
                                            <div>
                                                <span className="fw-semibold">LNF-2026-000135</span> flagged duplicate
                                                <div className="text-muted mt-0.5" style={{ fontSize: "11px" }}>3 hours ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Weekly Category Mix */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Weekly Category Mix</h5>
                                
                                <div className="d-flex align-items-center gap-4 py-2">
                                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: "90px", height: "90px" }}>
                                        <svg width="80" height="80" viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg" stroke="#eee" strokeWidth="3.8" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <path className="circle" stroke="#1B2A4A" strokeWidth="3.8" strokeDasharray="70, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column gap-1.5" style={{ fontSize: "12px" }}>
                                        <div className="fw-bold text-dark">70% Electronics</div>
                                        <div className="text-muted">15% Accessories</div>
                                        <div className="text-muted">15% Keys & Cards</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default StaffDashboard;