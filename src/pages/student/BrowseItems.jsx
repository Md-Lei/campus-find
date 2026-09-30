import React from 'react';

function BrowseItems() {
    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <div className="d-flex align-items-center gap-3">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Lost & Found Database</h4>
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

            {/* BROWSE LIVE DIRECTORY HEADER & FILTERS CARD */}
            <div className="card border shadow-sm p-4 bg-white mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#1B2A4A" }}>
                        Browse Live Directory <span className="text-muted fw-normal" style={{ fontSize: "14px" }}>(247 Active Listings)</span>
                    </h5>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-light border text-dark px-2 py-1"><i className="bi bi-grid-fill"></i></button>
                        <button className="btn btn-sm btn-light border text-muted px-2 py-1"><i className="bi bi-list-ul"></i></button>
                    </div>
                </div>

                {/* FILTERS BAR */}
                <div className="d-flex flex-wrap align-items-center gap-2 pt-2 border-top">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-sm btn-dark px-3" style={{ backgroundColor: "#1B2A4A", fontSize: "12px" }}>All</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary px-3" style={{ fontSize: "12px" }}>Lost</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary px-3" style={{ fontSize: "12px" }}>Found</button>
                    </div>

                    <select className="form-select form-select-sm text-muted shadow-none" style={{ width: "190px", fontSize: "12px" }}>
                        <option>Category: Electronics</option>
                    </select>

                    <select className="form-select form-select-sm text-muted shadow-none" style={{ width: "170px", fontSize: "12px" }}>
                        <option>Location: All Buildings</option>
                    </select>

                    <select className="form-select form-select-sm text-muted shadow-none" style={{ width: "170px", fontSize: "12px" }}>
                        <option>Date Range: Last 7 Days</option>
                    </select>

                    <select className="form-select form-select-sm text-muted shadow-none" style={{ width: "130px", fontSize: "12px" }}>
                        <option>Color: Black</option>
                    </select>

                    <select className="form-select form-select-sm text-muted shadow-none ms-auto" style={{ width: "150px", fontSize: "12px" }}>
                        <option>Sort: Newest First</option>
                    </select>
                </div>
            </div>

            {/* ITEM CARDS GRID - ROW 1 */}
            <div className="row g-4 mb-4">
                
                {/* Item 1 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Phone Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>ELECTRONICS</span>
                            <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>iPhone 15 Pro Max</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Library Study Room 3B</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Today, 10:30 AM</div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Keys Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>KEYS</span>
                            <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Brass Keyring & Carabiner</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Student Union Lounge</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Today, 09:15 AM</div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Backpack Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>BAGS</span>
                            <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>North Face Sport Pack</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Gym Lockers Area</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Yesterday</div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">ID Card Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>IDS & CARDS</span>
                            <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Student ID Card (S. Patel)</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Science Auditorium</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 2 days ago</div>
                    </div>
                </div>

            </div>

            {/* ITEM CARDS GRID - ROW 2 */}
            <div className="row g-4 mb-4">
                
                {/* Item 5 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Glasses Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>CLOTHING</span>
                            <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Tom Ford Designer Frames</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Campus Quad Green</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 2 days ago</div>
                    </div>
                </div>

                {/* Item 6 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Cardholder Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>IDS & CARDS</span>
                            <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Leather Cardholder (Chase...</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Computer Lab 10</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 3 days ago</div>
                    </div>
                </div>

                {/* Item 7 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">Bottle Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>SPORTS</span>
                            <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Hydro Flask 32oz White</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Engineering Atrium</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 4 days ago</div>
                    </div>
                </div>

                {/* Item 8 */}
                <div className="col-md-3">
                    <div className="card shadow-sm border rounded p-3 h-100 bg-white">
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                            <span className="text-muted small">AirPods Image</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>ELECTRONICS</span>
                            <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>AirPods Gen 3 Case</h6>
                        <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Bus Terminal South</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 5 days ago</div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default BrowseItems;