import React from 'react';

function MyReports() {
    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>My Reports</h4>
                
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

            {/* FILTER & CONTROL BAR */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                {/* Type Filter Pills */}
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-dark text-white px-3 py-1.5 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ fontSize: "13px", borderRadius: "20px", backgroundColor: "#1B2A4A" }}>
                        All Reports <span className="badge bg-secondary rounded-pill" style={{ fontSize: "10px" }}>5</span>
                    </button>
                    <button className="btn btn-light text-muted border px-3 py-1.5 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ fontSize: "13px", borderRadius: "20px" }}>
                        Lost Reports <span className="badge bg-light text-muted border rounded-pill" style={{ fontSize: "10px" }}>3</span>
                    </button>
                    <button className="btn btn-light text-muted border px-3 py-1.5 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ fontSize: "13px", borderRadius: "20px" }}>
                        Found Reports <span className="badge bg-light text-muted border rounded-pill" style={{ fontSize: "10px" }}>2</span>
                    </button>
                </div>

                {/* Dropdown Filters */}
                <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2 bg-white border px-3 py-1.5 rounded shadow-sm text-dark" style={{ fontSize: "13px", cursor: "pointer" }}>
                        <span className="text-muted">Status:</span>
                        <span className="fw-semibold">All Statuses</span>
                        <i className="bi bi-chevron-down text-muted" style={{ fontSize: "10px" }}></i>
                    </div>
                    <div className="d-flex align-items-center gap-2 bg-white border px-3 py-1.5 rounded shadow-sm text-dark" style={{ fontSize: "13px", cursor: "pointer" }}>
                        <span className="text-muted">Date:</span>
                        <span className="fw-semibold">Last 30 Days</span>
                        <i className="bi bi-chevron-down text-muted" style={{ fontSize: "10px" }}></i>
                    </div>
                    <div className="d-flex align-items-center gap-2 bg-white border px-3 py-1.5 rounded shadow-sm text-dark" style={{ fontSize: "13px", cursor: "pointer" }}>
                        <span className="text-muted">Sort By:</span>
                        <span className="fw-semibold">Newest First</span>
                        <i className="bi bi-chevron-down text-muted" style={{ fontSize: "10px" }}></i>
                    </div>
                </div>
            </div>

            {/* REPORTS TABLE CARD */}
            <div className="card border shadow-sm bg-white mb-4" style={{ borderRadius: "8px", overflow: "hidden" }}>
                <div className="table-responsive">
                    <table className="table align-middle mb-0" style={{ fontSize: "13px" }}>
                        <thead className="bg-light text-uppercase text-muted" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                            <tr>
                                <th className="py-3 px-4">Item Details</th>
                                <th className="py-3">Case Number</th>
                                <th className="py-3">Type</th>
                                <th className="py-3">Category</th>
                                <th className="py-3">Date Reported</th>
                                <th className="py-3">Status</th>
                                <th className="py-3 text-end px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr className="border-bottom">
                                <td className="py-3 px-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-secondary rounded text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "38px", height: "38px", fontSize: "11px", background: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                        <div className="fw-bold text-dark">iPhone 15 Pro Max</div>
                                    </div>
                                </td>
                                <td className="text-muted fw-medium">LNF-2026-000124</td>
                                <td><span className="badge bg-danger bg-opacity-10 text-danger px-2 py-1 fw-bold" style={{ fontSize: "10px" }}>LOST</span></td>
                                <td className="text-dark">Electronics</td>
                                <td className="text-muted">Sep 15, 2026</td>
                                <td>
                                    <span className="badge bg-purple text-purple bg-opacity-10 px-2.5 py-1 rounded-pill" style={{ fontSize: "11px", backgroundColor: "#f3e8ff", color: "#7e22ce" }}>
                                        Searching
                                    </span>
                                </td>
                                <td className="text-end px-4">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button className="btn btn-sm text-white px-3 py-1 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>View</button>
                                        <button className="btn btn-sm btn-light border text-dark px-3 py-1 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "4px" }}>Edit</button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="border-bottom">
                                <td className="py-3 px-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-secondary rounded text-white d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px", background: "url('https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                        <div className="fw-bold text-dark">Water Bottle (HydroFlask)</div>
                                    </div>
                                </td>
                                <td className="text-muted fw-medium">LNF-2026-000119</td>
                                <td><span className="badge bg-success bg-opacity-10 text-success px-2 py-1 fw-bold" style={{ fontSize: "10px" }}>FOUND</span></td>
                                <td className="text-dark">Accessories</td>
                                <td className="text-muted">Sep 12, 2026</td>
                                <td>
                                    <span className="badge px-2.5 py-1 rounded-pill" style={{ fontSize: "11px", backgroundColor: "#dcfce7", color: "#166534" }}>
                                        Matched
                                    </span>
                                </td>
                                <td className="text-end px-4">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button className="btn btn-sm text-white px-3 py-1 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>View</button>
                                        <button className="btn btn-sm btn-light border text-dark px-3 py-1 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "4px" }}>Edit</button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="border-bottom">
                                <td className="py-3 px-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-secondary rounded text-white d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px", background: "url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                        <div className="fw-bold text-dark">Chemistry Textbook</div>
                                    </div>
                                </td>
                                <td className="text-muted fw-medium">LNF-2026-000104</td>
                                <td><span className="badge bg-danger bg-opacity-10 text-danger px-2 py-1 fw-bold" style={{ fontSize: "10px" }}>LOST</span></td>
                                <td className="text-dark">Books</td>
                                <td className="text-muted">Sep 08, 2026</td>
                                <td>
                                    <span className="badge px-2.5 py-1 rounded-pill" style={{ fontSize: "11px", backgroundColor: "#dbeafe", color: "#1e40af" }}>
                                        Verified
                                    </span>
                                </td>
                                <td className="text-end px-4">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button className="btn btn-sm text-white px-3 py-1 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>View</button>
                                        <button className="btn btn-sm btn-light border text-dark px-3 py-1 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "4px" }}>Edit</button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 4 */}
                            <tr className="border-bottom">
                                <td className="py-3 px-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-secondary rounded text-white d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px", background: "url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                        <div className="fw-bold text-dark">Gym Duffel Bag</div>
                                    </div>
                                </td>
                                <td className="text-muted fw-medium">LNF-2026-000098</td>
                                <td><span className="badge bg-success bg-opacity-10 text-success px-2 py-1 fw-bold" style={{ fontSize: "10px" }}>FOUND</span></td>
                                <td className="text-dark">Bags</td>
                                <td className="text-muted">Sep 02, 2026</td>
                                <td>
                                    <span className="badge px-2.5 py-1 rounded-pill" style={{ fontSize: "11px", backgroundColor: "#f1f5f9", color: "#475569" }}>
                                        Closed
                                    </span>
                                </td>
                                <td className="text-end px-4">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button className="btn btn-sm text-white px-3 py-1 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>View</button>
                                        <button className="btn btn-sm btn-light border text-dark px-3 py-1 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "4px" }}>Edit</button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 5 */}
                            <tr>
                                <td className="py-3 px-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-secondary rounded text-white d-flex align-items-center justify-content-center" style={{ width: "38px", height: "38px", background: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80') center/cover no-repeat" }}></div>
                                        <div className="fw-bold text-dark">Sony WH-1000XM4</div>
                                    </div>
                                </td>
                                <td className="text-muted fw-medium">LNF-2026-000072</td>
                                <td><span className="badge bg-danger bg-opacity-10 text-danger px-2 py-1 fw-bold" style={{ fontSize: "10px" }}>LOST</span></td>
                                <td className="text-dark">Electronics</td>
                                <td className="text-muted">Aug 24, 2026</td>
                                <td>
                                    <span className="badge px-2.5 py-1 rounded-pill" style={{ fontSize: "11px", backgroundColor: "#fee2e2", color: "#991b1b" }}>
                                        Cancelled
                                    </span>
                                </td>
                                <td className="text-end px-4">
                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                        <button className="btn btn-sm text-white px-3 py-1 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}>View</button>
                                        <button className="btn btn-sm btn-light border text-dark px-3 py-1 fw-semibold shadow-none" style={{ fontSize: "12px", borderRadius: "4px" }}>Edit</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* BOTTOM BANNER: DATABASE CONCEPT / ADD DETAILS */}
            <div className="card border shadow-sm bg-white p-3 d-flex flex-row justify-content-between align-items-center" style={{ borderRadius: "8px" }}>
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-light border rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                        <i className="bi bi-search" style={{ fontSize: "14px" }}></i>
                    </div>
                    <div>
                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>
                            No matching active claims found? (Database concept)
                        </div>
                        <div className="text-muted" style={{ fontSize: "12px" }}>
                            Reporting secondary markers or adding additional photos drastically boosts automatic verification matching.
                        </div>
                    </div>
                </div>
                <button className="btn text-white px-4 py-2 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px", flexShrink: 0 }}>
                    Add Details
                </button>
            </div>

        </div>
    );
}

export default MyReports;