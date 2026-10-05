import React, { useState } from 'react';


function PendingReports() {
    // State to toggle between list view and review detail view
    const [selectedReport, setSelectedReport] = useState(null);

    // State for review form controls
    const [reviewStatus, setReviewStatus] = useState('Verified & Publish');
    const [checklist, setChecklist] = useState({
        clearDescription: true,
        appropriateImages: true,
        validLocation: true,
        noDuplicates: true
    });
    const [staffNotes, setStaffNotes] = useState('Confirmed with library entry logs. Matches description accurately.');

    const handleVerifyClick = (reportId) => {
        setSelectedReport(reportId);
    };

    const handleBackToList = () => {
        setSelectedReport(null);
    };

    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
            


            {/* MAIN CONTENT AREA */}
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "18px" }}>
                        {selectedReport ? `Report Review — ${selectedReport}` : 'Pending Reports'}
                    </h4>
                    
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

                {/* CONDITIONAL VIEW: DETAIL REVIEW VS LIST */}
                {selectedReport ? (
                    /* REPORT REVIEW DETAIL PAGE */
                    <div className="p-4 flex-grow-1">
                        
                        {/* BACK BUTTON */}
                        <button 
                            className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-1 bg-white" 
                            onClick={handleBackToList}
                            style={{ fontSize: "12px" }}
                        >
                            <i className="bi bi-arrow-left"></i> Back to Pending Reports
                        </button>

                        <div className="row g-4">
                            
                            {/* LEFT COLUMN: REPORTER & ITEM SPECIFICATIONS */}
                            <div className="col-xl-8 d-flex flex-column gap-4">
                                
                                {/* Reporter Information Card */}
                                <div className="card border shadow-sm bg-white rounded p-4">
                                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Reporter Information</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Name</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Shaunak Patel</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Student ID</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>901248</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Department</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Computer Science</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submitted Item Specifications Card */}
                                <div className="card border shadow-sm bg-white rounded p-4">
                                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Submitted Item Specifications</h5>
                                    
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Item Name</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>iPhone 15 Pro Max</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Category</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Electronics</div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Unique Characteristic</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Scratched screen protector at top-right corner, black Spigen case</div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Lost Location</div>
                                            <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Library Study Room 3B</div>
                                        </div>
                                    </div>

                                    {/* Uploaded Photos */}
                                    <div className="mt-2">
                                        <div className="text-muted text-uppercase mb-2" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Uploaded Photos</div>
                                        <div className="d-flex gap-3">
                                            <div className="rounded border overflow-hidden bg-light" style={{ width: "110px", height: "85px" }}>
                                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80" alt="Item 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </div>
                                            <div className="rounded border overflow-hidden bg-light" style={{ width: "110px", height: "85px" }}>
                                                <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=200&q=80" alt="Item 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </div>
                                            <div className="rounded border overflow-hidden bg-light" style={{ width: "110px", height: "85px" }}>
                                                <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=200&q=80" alt="Item 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* RIGHT COLUMN: VERIFICATION & CHECKLIST PANEL */}
                            <div className="col-xl-4 d-flex flex-column gap-4">
                                <div className="card border shadow-sm bg-white rounded p-4">
                                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Verification & Checklist</h5>

                                    {/* Review Status Dropdown */}
                                    <div className="mb-3">
                                        <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Review Status</label>
                                        <select 
                                            className="form-select shadow-none" 
                                            value={reviewStatus}
                                            onChange={(e) => setReviewStatus(e.target.value)}
                                            style={{ fontSize: "13px" }}
                                        >
                                            <option>Verified & Publish</option>
                                            <option>Needs Clarification</option>
                                            <option>Reject Report</option>
                                        </select>
                                    </div>

                                    {/* Mandatory Verification Checklist */}
                                    <div className="mb-3">
                                        <label className="form-label text-muted mb-2" style={{ fontSize: "11.5px" }}>Mandatory Verification Checklist</label>
                                        <div className="d-flex flex-column gap-2" style={{ fontSize: "12.5px" }}>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input shadow-none" 
                                                    type="checkbox" 
                                                    checked={checklist.clearDescription}
                                                    onChange={(e) => setChecklist({...checklist, clearDescription: e.target.checked})}
                                                    id="check1" 
                                                />
                                                <label className="form-check-label text-dark" htmlFor="check1">Item description is clear</label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input shadow-none" 
                                                    type="checkbox" 
                                                    checked={checklist.appropriateImages}
                                                    onChange={(e) => setChecklist({...checklist, appropriateImages: e.target.checked})}
                                                    id="check2" 
                                                />
                                                <label className="form-check-label text-dark" htmlFor="check2">Images are appropriate</label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input shadow-none" 
                                                    type="checkbox" 
                                                    checked={checklist.validLocation}
                                                    onChange={(e) => setChecklist({...checklist, validLocation: e.target.checked})}
                                                    id="check3" 
                                                />
                                                <label className="form-check-label text-dark" htmlFor="check3">Location is valid</label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input shadow-none" 
                                                    type="checkbox" 
                                                    checked={checklist.noDuplicates}
                                                    onChange={(e) => setChecklist({...checklist, noDuplicates: e.target.checked})}
                                                    id="check4" 
                                                />
                                                <label className="form-check-label text-dark" htmlFor="check4">No duplicate reports found</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Internal Staff Notes */}
                                    <div className="mb-4">
                                        <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Internal Staff Notes</label>
                                        <textarea 
                                            className="form-control shadow-none" 
                                            rows="3" 
                                            value={staffNotes}
                                            onChange={(e) => setStaffNotes(e.target.value)}
                                            style={{ fontSize: "12.5px" }}
                                        ></textarea>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-danger w-50 fw-semibold" style={{ fontSize: "12px", backgroundColor: "#fdf2f2" }}>Reject</button>
                                        <button className="btn btn-outline-warning w-50 fw-semibold text-dark" style={{ fontSize: "12px", backgroundColor: "#fff9e6" }}>Request Info</button>
                                    </div>
                                    <button className="btn text-white w-15 w-100 mt-2 fw-semibold py-2 shadow-sm" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }} onClick={handleBackToList}>
                                        Verify & Publish
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>
                ) : (
                    /* PENDING REPORTS LIST VIEW */
                    <div className="p-4 flex-grow-1">
                        
                        {/* PAGE HEADER INFO / BANNER */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h3 className="fw-bold mb-1" style={{ fontSize: "20px", color: "#1B2A4A" }}>Pending Verification Reports</h3>
                                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                    Review and verify lost and found items submitted by students before publication.
                                </p>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary bg-white px-3 py-2 fw-semibold text-dark border shadow-sm" style={{ fontSize: "12px", borderRadius: "6px" }}>
                                    <i className="bi bi-filter me-1"></i> Filter By Category
                                </button>
                                <button className="btn text-white px-3 py-2 fw-semibold shadow-sm" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>
                                    <i className="bi bi-arrow-clockwise me-1"></i> Refresh Queue
                                </button>
                            </div>
                        </div>

                        {/* METRIC STRIP FOR REPORTS */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <div className="text-muted mb-1" style={{ fontSize: "12px" }}>Total Pending Review</div>
                                    <div className="fw-bold fs-3 text-dark">12 Reports</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <div className="text-muted mb-1" style={{ fontSize: "12px" }}>High Priority Verification</div>
                                    <div className="fw-bold fs-3 text-danger">4 Reports</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <div className="text-muted mb-1" style={{ fontSize: "12px" }}>Average Review Time</div>
                                    <div className="fw-bold fs-3 text-success">~15 mins</div>
                                </div>
                            </div>
                        </div>

                        {/* MAIN REPORTS TABLE CARD */}
                        <div className="card border shadow-sm bg-white rounded p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold text-dark mb-0" style={{ fontSize: "15px" }}>Verification Queue</h5>
                                <span className="text-muted" style={{ fontSize: "12px" }}>Showing 1-5 of 12 pending reports</span>
                            </div>

                            <div className="table-responsive">
                                <table className="table align-middle mb-0" style={{ fontSize: "13px" }}>
                                    <thead>
                                        <tr className="text-muted border-bottom" style={{ fontSize: "12px" }}>
                                            <th className="fw-semibold pb-3 ps-0">Case #</th>
                                            <th className="fw-semibold pb-3">Item Name & Category</th>
                                            <th className="fw-semibold pb-3">Submitted By</th>
                                            <th className="fw-semibold pb-3">Location Found/Lost</th>
                                            <th className="fw-semibold pb-3">Priority</th>
                                            <th className="fw-semibold pb-3 text-end pe-0">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom">
                                            <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000130</td>
                                            <td>
                                                <div className="fw-semibold text-dark">iPhone 15 Pro Max</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Electronics • Serial verified</div>
                                            </td>
                                            <td>
                                                <div className="text-dark">Shaunak Patel</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 901248</div>
                                            </td>
                                            <td className="text-muted">Library Study Room 3B</td>
                                            <td><span className="badge bg-danger bg-opacity-15 text-danger fw-bold px-3 py-1" style={{ fontSize: "11px" }}>High</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("LNF-2026-000130")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}><i className="bi bi-x-lg"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000135</td>
                                            <td>
                                                <div className="fw-semibold text-dark">North Face Backpack</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Accessories • Blue/Black</div>
                                            </td>
                                            <td>
                                                <div className="text-dark">John D.</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 883921</div>
                                            </td>
                                            <td className="text-muted">Student Union Quad</td>
                                            <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("LNF-2026-000135")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}><i className="bi bi-x-lg"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000139</td>
                                            <td>
                                                <div className="fw-semibold text-dark">Wireless Earbuds Case</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Electronics • White AirPods</div>
                                            </td>
                                            <td>
                                                <div className="text-dark">Alex K.</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 772910</div>
                                            </td>
                                            <td className="text-muted">Science Building Hallway</td>
                                            <td><span className="badge bg-info bg-opacity-20 text-info fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Low</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("LNF-2026-000139")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}><i className="bi bi-x-lg"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000142</td>
                                            <td>
                                                <div className="fw-semibold text-dark">Calculus Textbook (9th Ed)</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Books • With notes inside</div>
                                            </td>
                                            <td>
                                                <div className="text-dark">Sarah M.</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 662519</div>
                                            </td>
                                            <td className="text-muted">Engineering Lecture Hall 3</td>
                                            <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("LNF-2026-000142")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}><i className="bi bi-x-lg"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000145</td>
                                            <td>
                                                <div className="fw-semibold text-dark">Casio Scientific Calculator</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Electronics • Model fx-991ES</div>
                                            </td>
                                            <td>
                                                <div className="text-dark">Kevin L.</div>
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 554192</div>
                                            </td>
                                            <td className="text-muted">Math Department Lab 102</td>
                                            <td><span className="badge bg-danger bg-opacity-15 text-danger fw-bold px-3 py-1" style={{ fontSize: "11px" }}>High</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("LNF-2026-000145")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}><i className="bi bi-x-lg"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* TABLE PAGINATION FOOTER */}
                            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top" style={{ fontSize: "12.5px" }}>
                                <span className="text-muted">Page 1 of 3</span>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary btn-sm px-3 disabled" style={{ fontSize: "12px" }}>Previous</button>
                                    <button className="btn btn-sm text-white px-3 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px" }}>1</button>
                                    <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: "12px" }}>2</button>
                                    <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: "12px" }}>3</button>
                                    <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: "12px" }}>Next</button>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default PendingReports;