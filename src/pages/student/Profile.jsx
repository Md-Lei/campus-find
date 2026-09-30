import React from 'react';

function Profile() {
    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
            

            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>My Profile</h4>
                    
                    {/* Search & Profile Header Controls */}
                    <div className="d-flex align-items-center gap-4">
                        <div className="input-group" style={{ width: "260px" }}>
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
                            <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold overflow-hidden" style={{ width: "36px", height: "36px" }}>
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Maria S." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="lh-1">
                                <div className="fw-bold" style={{ fontSize: "13px", color: "#1B2A4A" }}>Maria S.</div>
                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 948271</div>
                            </div>
                            <i className="bi bi-chevron-down text-muted ms-1" style={{ fontSize: "11px" }}></i>
                        </div>
                    </div>
                </div>

                {/* PROFILE PAGE BODY */}
                <div className="p-4 flex-grow-1">
                    
                    {/* TOP BANNER CARD */}
                    <div className="card border shadow-sm bg-white rounded p-4 mb-4">
                        <div className="d-flex align-items-center gap-4">
                            <div className="position-relative">
                                <div className="rounded-circle overflow-hidden bg-secondary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "72px", height: "72px" }}>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="Maria Sanchez" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                                <div className="position-absolute bottom-0 end-0 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center border border-white" style={{ width: "22px", height: "22px", fontSize: "10px", cursor: "pointer" }}>
                                    <i className="bi bi-pencil-fill"></i>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-3 mb-1">
                                    <h3 className="fw-bold mb-0 text-dark" style={{ fontSize: "20px" }}>Maria Sanchez</h3>
                                    <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-2.5 py-1" style={{ fontSize: "11px" }}>Active Student Account</span>
                                </div>
                                <div className="text-muted" style={{ fontSize: "13px" }}>
                                    ID: 948271 &nbsp;&bull;&nbsp; Computer Science Department &nbsp;&bull;&nbsp; Member since Jan 2026
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN GRID LAYOUT */}
                    <div className="row g-4">
                        
                        {/* LEFT COLUMN: PERSONAL INFO & SECURITY */}
                        <div className="col-lg-8 d-flex flex-column gap-4">
                            
                            {/* Personal Information Card */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-4" style={{ fontSize: "15px" }}>Personal Information</h5>
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>First Name</label>
                                        <input type="text" className="form-control bg-light shadow-none text-dark" defaultValue="Maria" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Last Name</label>
                                        <input type="text" className="form-control bg-light shadow-none text-dark" defaultValue="Sanchez" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Contact Number</label>
                                        <input type="text" className="form-control bg-light shadow-none text-dark" defaultValue="+1555-0192" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Course / Program</label>
                                        <input type="text" className="form-control bg-light shadow-none text-dark" defaultValue="B.S. Computer Science" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Year Level</label>
                                        <input type="text" className="form-control bg-light shadow-none text-dark" defaultValue="3rd Year" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Faculty Department (Read-Only)</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light shadow-none text-muted" defaultValue="Computer Science Department" readOnly style={{ fontSize: "13.5px" }} />
                                            <span className="input-group-text bg-light text-muted">
                                                <i className="bi bi-lock-fill" style={{ fontSize: "12px" }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Security Settings Card */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-4" style={{ fontSize: "15px" }}>Account Security Settings</h5>
                                
                                <div className="mb-3">
                                    <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Registered School Email</label>
                                    <div className="input-group">
                                        <input type="email" className="form-control bg-light shadow-none text-muted" defaultValue="maria.sanchez@university.edu" readOnly style={{ fontSize: "13.5px" }} />
                                        <span className="input-group-text bg-white text-success fw-bold" style={{ fontSize: "11px" }}>
                                            VERIFIED STUDENT SSO
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Change Password</label>
                                        <input type="password" className="form-control bg-light shadow-none text-muted" placeholder="Current password" style={{ fontSize: "13.5px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>New Password</label>
                                        <input type="password" className="form-control bg-light shadow-none text-muted" placeholder="Min. 8 characters" style={{ fontSize: "13.5px" }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: NOTIFICATION SETTINGS & ACTIVITY STATISTICS */}
                        <div className="col-lg-4 d-flex flex-column gap-4">
                            
                            {/* Notification Settings Card */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-4" style={{ fontSize: "15px" }}>NOTIFICATION SETTINGS</h5>
                                
                                <div className="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom">
                                    <div>
                                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Email Notifications</div>
                                        <div className="text-muted" style={{ fontSize: "11px" }}>Get match reports sent directly to email inbox</div>
                                    </div>
                                    <div className="form-check form-switch m-0">
                                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked style={{ cursor: "pointer" }} />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom">
                                    <div>
                                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>In-App Matches Alerts</div>
                                        <div className="text-muted" style={{ fontSize: "11px" }}>Popups for any 80%+ auto match verified listing</div>
                                    </div>
                                    <div className="form-check form-switch m-0">
                                        <input className="form-check-input" type="checkbox" role="switch" defaultChecked style={{ cursor: "pointer" }} />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Weekly Summary Report</div>
                                        <div className="text-muted" style={{ fontSize: "11px" }}>A breakdown of general campus returned statistics</div>
                                    </div>
                                    <div className="form-check form-switch m-0">
                                        <input className="form-check-input" type="checkbox" role="switch" style={{ cursor: "pointer" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Activity Statistics Card */}
                            <div className="card border shadow-sm bg-white rounded p-4">
                                <h5 className="fw-bold text-dark mb-4" style={{ fontSize: "15px" }}>ACTIVITY STATISTICS</h5>
                                
                                <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom" style={{ fontSize: "13px" }}>
                                    <span className="text-muted">Total Reported Items</span>
                                    <span className="fw-bold text-dark" style={{ fontSize: "15px" }}>4</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom" style={{ fontSize: "13px" }}>
                                    <span className="text-muted">Total Active Claims</span>
                                    <span className="fw-bold text-dark" style={{ fontSize: "15px" }}>2</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center" style={{ fontSize: "13px" }}>
                                    <span className="text-muted">Successfully Returned</span>
                                    <span className="fw-bold text-success" style={{ fontSize: "15px" }}>5</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* BOTTOM ACTION BAR */}
                    <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                        <span className="text-danger fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }}>
                            Deactivate CampusFind Account
                        </span>

                        <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-light border px-4 py-2 fw-semibold text-secondary" style={{ fontSize: "13px", borderRadius: "6px" }}>
                                Cancel
                            </button>
                            <button className="btn text-white px-4 py-2 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }}>
                                Save Changes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;