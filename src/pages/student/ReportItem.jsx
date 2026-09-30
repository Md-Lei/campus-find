import React, { useState } from 'react';

function ReportItem() {
    // State to track current step (1, 2, or 3)
    const [currentStep, setCurrentStep] = useState(1);
    // State to toggle the success modal popup
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4 position-relative" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Logging Portal</h4>
                
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

            {/* LOGGING FORM CARD CONTAINER */}
            <div className={`card border shadow-sm bg-white mb-5 mx-auto ${showSuccessModal ? 'opacity-50' : ''}`} style={{ maxWidth: "960px" }}>
                
                {/* STEP 1: ITEM SPECIFIC DETAILS & CORE IDENTIFIERS*/}
                {currentStep === 1 && (
                    <>
                        <div className="p-3 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: "#1B2A4A", borderTopLeftRadius: "calc(0.375rem - 1px)", borderTopRightRadius: "calc(0.375rem - 1px)" }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: "28px", height: "28px", fontSize: "13px" }}>
                                    1
                                </div>
                                <span className="fw-bold" style={{ fontSize: "15px" }}>Item Specific Details & Core Identifiers</span>
                            </div>
                            <span className="text-white-50" style={{ fontSize: "12px" }}>Step 1 of 3</span>
                        </div>

                        <div className="p-4">
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>
                                        Item Name / Tag <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="iPhone 15 Pro Max" style={{ fontSize: "13px" }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>
                                        Category <span className="text-danger">*</span>
                                    </label>
                                    <select className="form-select shadow-none text-dark" style={{ fontSize: "13px" }}>
                                        <option>Electronics</option>
                                        <option>Keys</option>
                                        <option>Bags</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Brand / Manufacturer</label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="Apple" style={{ fontSize: "13px" }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Model Code</label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="Pro Max 256GB" style={{ fontSize: "13px" }} />
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Estimated Valuation Range</label>
                                    <select className="form-select shadow-none text-dark" style={{ fontSize: "13px" }}>
                                        <option>$1,000 - $1,500</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Primary Case Color</label>
                                    <select className="form-select shadow-none text-dark" style={{ fontSize: "13px" }}>
                                        <option>Space Black</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Public Item Description</label>
                                <textarea className="form-control shadow-none text-dark" rows="3" defaultValue="Topographic lockscreen layout, transparent hard shell backing with minor signs of daily wear. Had a 45% charge left." style={{ fontSize: "13px", resize: "none" }}></textarea>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Private Characteristics / Proof of Ownership Details</label>
                                <textarea className="form-control shadow-none text-dark" rows="2" defaultValue="Unique micro-scratch situated directly below the USB-C charging port." style={{ fontSize: "13px", resize: "none" }}></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-dark mb-1" style={{ fontSize: "12px" }}>Upload Physical Media (Max 5)</label>
                                <div className="border border-2 border-dashed rounded p-4 text-center bg-light mb-3" style={{ borderColor: "#cbd5e1" }}>
                                    <div className="text-secondary mb-1"><i className="bi bi-camera fs-3"></i></div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Drag & drop files here, or click to browse</div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-4">
                                <span className="text-danger fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }}>Cancel and Discard Draft</span>
                                <button onClick={() => setCurrentStep(2)} className="btn text-white px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }}>
                                    Next: Location & Time <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* STEP 2: EXACT LOCATION & PRECISE LOGGING PARAMETERS  */}
                {currentStep === 2 && (
                    <>
                        <div className="p-3 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: "#1B2A4A", borderTopLeftRadius: "calc(0.375rem - 1px)", borderTopRightRadius: "calc(0.375rem - 1px)" }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: "28px", height: "28px", fontSize: "13px" }}>
                                    2
                                </div>
                                <span className="fw-bold" style={{ fontSize: "15px" }}>Exact Location overlap & Precise Logging Parameters</span>
                            </div>
                            <span className="text-white-50" style={{ fontSize: "12px" }}>Step 2 of 3</span>
                        </div>

                        <div className="p-4">
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Date Found <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="Sep 15, 2026" style={{ fontSize: "13px" }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Estimated Time Found <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="10:30 AM" style={{ fontSize: "13px" }} />
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Primary Campus Building <span className="text-danger">*</span></label>
                                    <select className="form-select shadow-none text-dark" style={{ fontSize: "13px" }}>
                                        <option>Central Library</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Specific Room / Internal Sector <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="Study Room 3B (2nd Floor)" style={{ fontSize: "13px" }} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-dark mb-1" style={{ fontSize: "12px" }}>Place Precise Coordinate Pin (Recommended)</label>
                                <div className="position-relative border rounded overflow-hidden" style={{ height: "180px", backgroundColor: "#e2e8f0" }}>
                                    <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted" style={{ background: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat" }}>
                                        <div className="position-absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -100%)" }}>
                                            <i className="bi bi-geo-alt-fill text-danger fs-3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Current Safe Storage Facility <span className="text-danger">*</span></label>
                                    <select className="form-select shadow-none text-dark" style={{ fontSize: "13px" }}>
                                        <option>Central Library Reception Desk</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Assigned Safe Desk Case ID</label>
                                    <input type="text" className="form-control shadow-none text-dark" defaultValue="CF-LIB-203" style={{ fontSize: "13px" }} />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold text-dark" style={{ fontSize: "12px" }}>Dropoff Handover Remarks / Instructions</label>
                                <textarea className="form-control shadow-none text-dark" rows="2" defaultValue="Deposited safe inside drawer locker 'B' at the receptionist." style={{ fontSize: "13px", resize: "none" }}></textarea>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-4">
                                <button onClick={() => setCurrentStep(1)} className="btn btn-light border text-dark px-3 py-2 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ fontSize: "13px", borderRadius: "6px" }}>
                                    <i className="bi bi-chevron-left"></i> Back: Item Details
                                </button>
                                <button onClick={() => setCurrentStep(3)} className="btn text-white px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }}>
                                    Next: Review & Confirm <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* STEP 3: REVIEW AND AUTHENTICATE SUBMISSION*/}
                {currentStep === 3 && (
                    <>
                        <div className="p-3 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: "#1B2A4A", borderTopLeftRadius: "calc(0.375rem - 1px)", borderTopRightRadius: "calc(0.375rem - 1px)" }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: "28px", height: "28px", fontSize: "13px" }}>
                                    3
                                </div>
                                <span className="fw-bold" style={{ fontSize: "15px" }}>Review and Authenticate Submission</span>
                            </div>
                            <span className="text-white-50" style={{ fontSize: "12px" }}>Step 3 of 3</span>
                        </div>

                        <div className="p-4">
                            {/* Review Box 1 */}
                            <div className="p-3 border rounded bg-light mb-3">
                                <div className="text-muted fw-bold mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>1. ITEM SPECS & DETAILS</div>
                                <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Item Name</div>
                                <div className="text-dark mb-2" style={{ fontSize: "13px" }}>iPhone 15 Pro Max</div>
                            </div>

                            {/* Review Box 2 */}
                            <div className="p-3 border rounded bg-light mb-3">
                                <div className="text-muted fw-bold mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>2. LOCATION COORDINATES & STORAGE</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Campus Building</div>
                                        <div className="text-dark" style={{ fontSize: "13px" }}>Central Library</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="fw-bold text-dark" style={{ fontSize: "13px" }}>Safe Storage Facility</div>
                                        <div className="text-dark" style={{ fontSize: "13px" }}>Central Library Reception Desk</div>
                                    </div>
                                </div>
                            </div>

                            {/* Honor Code Checkbox */}
                            <div className="form-check mb-4">
                                <input className="form-check-input shadow-none" type="checkbox" defaultChecked id="honorCodeCheck" />
                                <label className="form-check-label text-dark" htmlFor="honorCodeCheck" style={{ fontSize: "13px" }}>
                                    <strong>University Honor Code Authentication:</strong> I formally acknowledge that all logged details are accurate and matches will be reported directly to University Security if flagged.
                                </label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-4">
                                <button onClick={() => setCurrentStep(2)} className="btn btn-light border text-dark px-3 py-2 fw-semibold d-flex align-items-center gap-2 shadow-none" style={{ fontSize: "13px", borderRadius: "6px" }}>
                                    <i className="bi bi-chevron-left"></i> Back: Edit Location
                                </button>
                                <button 
                                    onClick={() => setShowSuccessModal(true)} 
                                    className="btn text-white px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-none" 
                                    style={{ backgroundColor: "#198754", fontSize: "13px", borderRadius: "6px" }}
                                >
                                    Confirm and Submit Report <i className="bi bi-check-lg"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>


            {/* SUCCESS MODAL POPUP OVERLAY*/}
        
            {showSuccessModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}>
                    <div className="bg-white rounded p-4 text-center shadow-lg position-relative" style={{ width: "480px", maxWidth: "90%" }}>
                        
                        {/* Checkmark Icon Circle */}
                        <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                            <i className="bi bi-check-lg fs-2"></i>
                        </div>

                        <h4 className="fw-bold text-dark mb-1" style={{ fontSize: "20px" }}>Report Submitted Successfully!</h4>
                        <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                            Your report has been logged and verified on the smart retrieval grid network.
                        </p>

                        {/* Reference Case ID Box */}
                        <div className="bg-light border rounded p-3 mb-4">
                            <div className="text-muted mb-1" style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.5px" }}>REFERENCE CASE ID</div>
                            <div className="fw-bold text-dark" style={{ fontSize: "16px", letterSpacing: "1px" }}>LNF-2026-000125</div>
                        </div>

                        {/* Modal Action Buttons */}
                        <div className="d-flex flex-column gap-2">
                            <button 
                                onClick={() => alert("Redirecting to My Live Reports...")}
                                className="btn text-white py-2 fw-semibold shadow-none" 
                                style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }}
                            >
                                View My Live Reports
                            </button>
                            <button 
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    setCurrentStep(1);
                                }}
                                className="btn btn-link text-decoration-none text-muted p-1" 
                                style={{ fontSize: "13px" }}
                            >
                                Report another campus item
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default ReportItem;