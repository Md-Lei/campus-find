import React from 'react';

function MyClaims() {
    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>My Claims</h4>
                
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

            {/* SUBTITLE */}
            <div className="text-muted mb-4 fw-medium" style={{ fontSize: "14px" }}>
                You have 4 active claims in progress.
            </div>

            {/* CLAIMS CARDS GRID */}
            <div className="row g-4">
                
                {/* ================= CARD 1: iPhone 15 Pro Max (Under Review) ================= */}
                <div className="col-xl-6">
                    <div className="card border shadow-sm bg-white p-4 h-100" style={{ borderRadius: "10px" }}>
                        
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded text-white" style={{ width: "42px", height: "42px", background: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                <div>
                                    <h6 className="fw-bold mb-1" style={{ color: "#1B2A4A", fontSize: "15px" }}>iPhone 15 Pro Max</h6>
                                    <div className="text-muted" style={{ fontSize: "11.5px" }}>Case: CLM-2026-000089 • Claimed on Sep 16, 2026</div>
                                </div>
                            </div>
                            <span className="badge px-2.5 py-1" style={{ backgroundColor: "#fef3c7", color: "#d97706", fontSize: "11px", fontWeight: "600", borderRadius: "6px" }}>
                                Under Review
                            </span>
                        </div>

                        <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>CLAIM PROGRESS TIMELINE</div>
                        
                        <div className="mb-3 px-1">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#10b981", top: "50%", transform: "translateY(-50%)", left: "15px", width: "43%", zIndex: 1 }}></div>
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#e2e8f0", top: "50%", transform: "translateY(-50%)", left: "58%", width: "41%", zIndex: 1 }}></div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white pe-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "16px", height: "16px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-dark" style={{ fontSize: "12px" }}>Submitted</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white px-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: "18px", height: "18px", fontSize: "9px" }}>
                                        2
                                    </div>
                                    <span className="fw-semibold text-primary" style={{ fontSize: "12px" }}>Staff Review</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>
                                        3
                                    </div>
                                    <span className="text-muted" style={{ fontSize: "12px" }}>Pickup Ready</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light p-2.5 rounded mb-3 d-flex align-items-center gap-2 border-start border-3 border-secondary" style={{ fontSize: "12px" }}>
                            <i className="bi bi-chat-left-text text-muted" style={{ fontSize: "13px" }}></i>
                            <span className="text-muted">Moderator Dave: Maria, please verify your serial number inside the secure Messages tab to complete verification.</span>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-auto">
                            <button className="btn btn-outline-danger btn-sm px-3 py-1.5 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "6px" }}>Cancel Claim</button>
                            <button className="btn btn-sm text-white px-3 py-1.5 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>Message Moderator</button>
                        </div>
                    </div>
                </div>

                {/* ================= CARD 2: Sony WH-1000XM4 (Pending Verification) ================= */}
                <div className="col-xl-6">
                    <div className="card border shadow-sm bg-white p-4 h-100" style={{ borderRadius: "10px" }}>
                        
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded text-white" style={{ width: "42px", height: "42px", background: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                <div>
                                    <h6 className="fw-bold mb-1" style={{ color: "#1B2A4A", fontSize: "15px" }}>Sony WH-1000XM4</h6>
                                    <div className="text-muted" style={{ fontSize: "11.5px" }}>Case: CLM-2026-000072 • Claimed on Sep 12, 2026</div>
                                </div>
                            </div>
                            <span className="badge px-2.5 py-1" style={{ backgroundColor: "#dbeafe", color: "#2563eb", fontSize: "11px", fontWeight: "600", borderRadius: "6px" }}>
                                Pending Verification
                            </span>
                        </div>

                        <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>CLAIM PROGRESS TIMELINE</div>
                        
                        <div className="mb-3 px-1">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#e2e8f0", top: "50%", transform: "translateY(-50%)", left: "15px", width: "84%", zIndex: 1 }}></div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white pe-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow-sm" style={{ width: "18px", height: "18px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-primary" style={{ fontSize: "12px" }}>Submitted</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white px-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>
                                        2
                                    </div>
                                    <span className="text-muted" style={{ fontSize: "12px" }}>Staff Review</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>
                                        3
                                    </div>
                                    <span className="text-muted" style={{ fontSize: "12px" }}>Pickup Ready</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light p-2.5 rounded mb-3 d-flex align-items-center gap-2 border-start border-3 border-secondary" style={{ fontSize: "12px" }}>
                            <i className="bi bi-chat-left-text text-muted" style={{ fontSize: "13px" }}></i>
                            <span className="text-muted">Please provide exact identification detail of any scratch markings.</span>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-auto">
                            <button className="btn btn-outline-danger btn-sm px-3 py-1.5 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "6px" }}>Cancel Claim</button>
                            <button className="btn btn-sm text-white px-3 py-1.5 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>Message Moderator</button>
                        </div>
                    </div>
                </div>

                {/* ================= CARD 3: North Face Backpack (Approved & Scheduled) ================= */}
                <div className="col-xl-6">
                    <div className="card border shadow-sm bg-white p-4 h-100" style={{ borderRadius: "10px" }}>
                        
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded text-white" style={{ width: "42px", height: "42px", background: "url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                <div>
                                    <h6 className="fw-bold mb-1" style={{ color: "#1B2A4A", fontSize: "15px" }}>North Face Backpack</h6>
                                    <div className="text-muted" style={{ fontSize: "11.5px" }}>Case: CLM-2026-000065 • Claimed on Sep 05, 2026</div>
                                </div>
                            </div>
                            <span className="badge px-2.5 py-1" style={{ backgroundColor: "#dcfce7", color: "#166534", fontSize: "11px", fontWeight: "600", borderRadius: "6px" }}>
                                Approved & Scheduled
                            </span>
                        </div>

                        <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>CLAIM PROGRESS TIMELINE</div>
                        
                        <div className="mb-3 px-1">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#10b981", top: "50%", transform: "translateY(-50%)", left: "15px", width: "84%", zIndex: 1 }}></div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white pe-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "16px", height: "16px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-success" style={{ fontSize: "12px" }}>Submitted</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white px-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "16px", height: "16px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-success" style={{ fontSize: "12px" }}>Staff Review</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow-sm" style={{ width: "18px", height: "18px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-primary" style={{ fontSize: "12px" }}>Pickup Ready</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-success bg-opacity-10 text-success p-2.5 rounded mb-3 d-flex align-items-center gap-2 border-start border-3 border-success" style={{ fontSize: "12px" }}>
                            <i className="bi bi-geo-alt-fill text-success" style={{ fontSize: "13px" }}></i>
                            <span className="fw-semibold">Pickup Zone: Central Library Front Desk 2A (Schedule: M-F 9am-4pm)</span>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-auto">
                            <button className="btn btn-outline-danger btn-sm px-3 py-1.5 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "6px" }}>Cancel Claim</button>
                            <button className="btn btn-sm text-white px-3 py-1.5 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>Schedule Pickup</button>
                        </div>
                    </div>
                </div>

                {/* ================= CARD 4: Leather Billfold Wallet (Rejected) ================= */}
                <div className="col-xl-6">
                    <div className="card border shadow-sm bg-white p-4 h-100" style={{ borderRadius: "10px" }}>
                        
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded text-white" style={{ width: "42px", height: "42px", background: "url('https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                <div>
                                    <h6 className="fw-bold mb-1" style={{ color: "#1B2A4A", fontSize: "15px" }}>Leather Billfold Wallet</h6>
                                    <div className="text-muted" style={{ fontSize: "11.5px" }}>Case: CLM-2026-000041 • Claimed on Aug 29, 2026</div>
                                </div>
                            </div>
                            <span className="badge px-2.5 py-1" style={{ backgroundColor: "#fee2e2", color: "#991b1b", fontSize: "11px", fontWeight: "600", borderRadius: "6px" }}>
                                Rejected
                            </span>
                        </div>

                        <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>CLAIM PROGRESS TIMELINE</div>
                        
                        <div className="mb-3 px-1">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#10b981", top: "50%", transform: "translateY(-50%)", left: "15px", width: "43%", zIndex: 1 }}></div>
                                <div className="position-absolute" style={{ height: "4px", backgroundColor: "#ef4444", top: "50%", transform: "translateY(-50%)", left: "58%", width: "41%", zIndex: 1 }}></div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white pe-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "16px", height: "16px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-success" style={{ fontSize: "12px" }}>Submitted</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white px-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "16px", height: "16px" }}>
                                        <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-success" style={{ fontSize: "12px" }}>Staff Review</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                    <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center shadow-sm" style={{ width: "18px", height: "18px" }}>
                                        <i className="bi bi-x" style={{ fontSize: "14px", strokeWidth: "3px" }}></i>
                                    </div>
                                    <span className="fw-semibold text-danger" style={{ fontSize: "12px" }}>Rejected</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-danger bg-opacity-10 text-danger p-2.5 rounded mb-3 d-flex align-items-center gap-2 border-start border-3 border-danger" style={{ fontSize: "12px" }}>
                            <i className="bi bi-exclamation-circle-fill text-danger flex-shrink-0" style={{ fontSize: "13px" }}></i>
                            <span>Reason: ID and lock codes did not match the verification proof provided by current claimant.</span>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-auto">
                            <button className="btn btn-outline-danger btn-sm px-3 py-1.5 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "6px" }}>Cancel Claim</button>
                            <button className="btn btn-sm text-white px-3 py-1.5 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>Message Moderator</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyClaims;