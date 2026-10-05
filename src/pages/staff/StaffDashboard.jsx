import React, { useState } from 'react';

function StaffDashboard() {
    // State to track selected case details & type ('report', 'claim', 'verification', 'success', or 'report-success')
    const [selectedCase, setSelectedCase] = useState(null);

    // State for Report Review Form
    const [reportStatus, setReportStatus] = useState('Verified & Publish');
    const [reportChecklist, setReportChecklist] = useState({
        clearDescription: true,
        appropriateImages: true,
        validLocation: true,
        noDuplicates: true
    });
    const [reportNotes, setReportNotes] = useState('Confirmed with library entry logs. Matches description accurately.');

    // State for Claim Review Form
    const [claimStatus, setClaimStatus] = useState('Approve Claim');
    const [claimChecklist, setClaimChecklist] = useState({
        studentIdVerified: true,
        proofOfOwnership: true,
        matchingSecurityAnswers: true,
        noFraudulentActivity: true
    });
    const [claimNotes, setClaimNotes] = useState('Student presented matching receipt and serial confirmation.');

    // State for Schedule Secure Pickup (in Verification View)
    const [pickupZone, setPickupZone] = useState('Security Office Front Desk');
    const [pickupDateTime, setPickupDateTime] = useState('Sep 18, 2026 – 02:00 PM');
    const [specialInstructions, setSpecialInstructions] = useState('Must bring physical Student ID to verify prior to physical handback.');

    const handleReviewClick = (caseId, type) => {
        setSelectedCase({ id: caseId, type: type });
    };

    const handleBackToDashboard = () => {
        setSelectedCase(null);
    };

    // Transition from Claim Review -> Ownership Verification & Scheduler
    const handleProceedToVerification = () => {
        setSelectedCase({ id: selectedCase.id, type: 'verification' });
    };

    // Finalize scheduling and go to success view
    const handleScheduleAndNotify = () => {
        setSelectedCase({ id: selectedCase.id, type: 'success' });
    };

    // Finalize report publishing and go to report success view
    const handlePublishReport = () => {
        setSelectedCase({ id: selectedCase.id, type: 'report-success' });
    };

    const getHeaderTitle = () => {
        if (!selectedCase) return 'Staff Dashboard';
        if (selectedCase.type === 'report') return `Report Review — ${selectedCase.id}`;
        if (selectedCase.type === 'claim') return `Claim Review — ${selectedCase.id}`;
        if (selectedCase.type === 'verification') return 'Ownership Verification & Schedule Pickup';
        if (selectedCase.type === 'success') return 'Claim Process Completed';
        if (selectedCase.type === 'report-success') return 'Report Published Successfully';
        return 'Staff Dashboard';
    };

    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>

            {/* MAIN CONTENT AREA */}
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "18px" }}>
                        {getHeaderTitle()}
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

                {/* CONDITIONAL VIEW RENDERER */}
                {selectedCase ? (
                    selectedCase.type === 'report' ? (
                        /* ================= REPORT REVIEW DETAIL VIEW ================= */
                        <div className="p-4 flex-grow-1">
                            <button 
                                className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-1 bg-white" 
                                onClick={handleBackToDashboard}
                                style={{ fontSize: "12px" }}
                            >
                                <i className="bi bi-arrow-left"></i> Back to Dashboard
                            </button>

                            <div className="row g-4">
                                <div className="col-xl-8 d-flex flex-column gap-4">
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
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex flex-column gap-4">
                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Verification & Checklist</h5>

                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Review Status</label>
                                            <select 
                                                className="form-select shadow-none" 
                                                value={reportStatus}
                                                onChange={(e) => setReportStatus(e.target.value)}
                                                style={{ fontSize: "13px" }}
                                            >
                                                <option>Verified & Publish</option>
                                                <option>Needs Clarification</option>
                                                <option>Reject Report</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label text-muted mb-2" style={{ fontSize: "11.5px" }}>Mandatory Verification Checklist</label>
                                            <div className="d-flex flex-column gap-2" style={{ fontSize: "12.5px" }}>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={reportChecklist.clearDescription}
                                                        onChange={(e) => setReportChecklist({...reportChecklist, clearDescription: e.target.checked})}
                                                        id="repCheck1" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="repCheck1">Item description is clear</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={reportChecklist.appropriateImages}
                                                        onChange={(e) => setReportChecklist({...reportChecklist, appropriateImages: e.target.checked})}
                                                        id="repCheck2" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="repCheck2">Images are appropriate</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={reportChecklist.validLocation}
                                                        onChange={(e) => setReportChecklist({...reportChecklist, validLocation: e.target.checked})}
                                                        id="repCheck3" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="repCheck3">Location is valid</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={reportChecklist.noDuplicates}
                                                        onChange={(e) => setReportChecklist({...reportChecklist, noDuplicates: e.target.checked})}
                                                        id="repCheck4" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="repCheck4">No duplicate reports found</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Internal Staff Notes</label>
                                            <textarea 
                                                className="form-control shadow-none" 
                                                rows="3" 
                                                value={reportNotes}
                                                onChange={(e) => setReportNotes(e.target.value)}
                                                style={{ fontSize: "12.5px" }}
                                            ></textarea>
                                        </div>

                                        <button 
                                            className="btn text-white w-100 mt-2 fw-semibold py-2 shadow-sm" 
                                            style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }} 
                                            onClick={handlePublishReport}
                                        >
                                            Verify & Publish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : selectedCase.type === 'claim' ? (
                        /* ================= CLAIM REVIEW DETAIL VIEW ================= */
                        <div className="p-4 flex-grow-1">
                            <button 
                                className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-1 bg-white" 
                                onClick={handleBackToDashboard}
                                style={{ fontSize: "12px" }}
                            >
                                <i className="bi bi-arrow-left"></i> Back to Dashboard
                            </button>

                            <div className="row g-4">
                                <div className="col-xl-8 d-flex flex-column gap-4">
                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Claimant Information</h5>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Claimant Name</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Alex Morgan</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Student ID</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>772910</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Contact No.</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>+63 912 345 6789</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Claimed Item Details</h5>
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Case Number</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>{selectedCase.id}</div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Item Name</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Brass Keyring with Carabiner</div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Proof of Ownership Description</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Contains 3 keys (dorm room, mailbox, bicycle lock) and a small silver whistle attached.</div>
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <div className="text-muted text-uppercase mb-2" style={{ fontSize: "10.5px", letterSpacing: "0.5px" }}>Submitted Verification Documents</div>
                                            <div className="d-flex gap-3">
                                                <div className="rounded border overflow-hidden bg-light" style={{ width: "110px", height: "85px" }}>
                                                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80" alt="Doc 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex flex-column gap-4">
                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Claim Verification Checklist</h5>

                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Claim Status</label>
                                            <select 
                                                className="form-select shadow-none" 
                                                value={claimStatus}
                                                onChange={(e) => setClaimStatus(e.target.value)}
                                                style={{ fontSize: "13px" }}
                                            >
                                                <option>Approve Claim</option>
                                                <option>Request Additional Proof</option>
                                                <option>Deny Claim</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label text-muted mb-2" style={{ fontSize: "11.5px" }}>Mandatory Security Checks</label>
                                            <div className="d-flex flex-column gap-2" style={{ fontSize: "12.5px" }}>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={claimChecklist.studentIdVerified}
                                                        onChange={(e) => setClaimChecklist({...claimChecklist, studentIdVerified: e.target.checked})}
                                                        id="claimCheck1" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="claimCheck1">Student ID verified</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={claimChecklist.proofOfOwnership}
                                                        onChange={(e) => setClaimChecklist({...claimChecklist, proofOfOwnership: e.target.checked})}
                                                        id="claimCheck2" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="claimCheck2">Valid proof of ownership provided</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={claimChecklist.matchingSecurityAnswers}
                                                        onChange={(e) => setClaimChecklist({...claimChecklist, matchingSecurityAnswers: e.target.checked})}
                                                        id="claimCheck3" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="claimCheck3">Security questions match logs</label>
                                                </div>
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input shadow-none" 
                                                        type="checkbox" 
                                                        checked={claimChecklist.noFraudulentActivity}
                                                        onChange={(e) => setClaimChecklist({...claimChecklist, noFraudulentActivity: e.target.checked})}
                                                        id="claimCheck4" 
                                                    />
                                                    <label className="form-check-label text-dark" htmlFor="claimCheck4">No fraudulent patterns detected</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Staff Evaluation Notes</label>
                                            <textarea 
                                                className="form-control shadow-none" 
                                                rows="3" 
                                                value={claimNotes}
                                                onChange={(e) => setClaimNotes(e.target.value)}
                                                style={{ fontSize: "12.5px" }}
                                            ></textarea>
                                        </div>

                                        {/* TRIGGERS TRANSITION TO VERIFICATION & SCHEDULER */}
                                        <button 
                                            className="btn text-white w-100 mt-2 fw-semibold py-2 shadow-sm" 
                                            style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }} 
                                            onClick={handleProceedToVerification}
                                        >
                                            Approve & Schedule Pickup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : selectedCase.type === 'verification' ? (
                        /* ================= OWNERSHIP VERIFICATION & SCHEDULER VIEW ================= */
                        <div className="p-4 flex-grow-1">
                            <button 
                                className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-1 bg-white" 
                                onClick={handleBackToDashboard}
                                style={{ fontSize: "12px" }}
                            >
                                <i className="bi bi-arrow-left"></i> Back to Dashboard
                            </button>

                            <div className="row g-4">
                                <div className="col-xl-8 d-flex flex-column gap-4">
                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Claimant Verification Details</h5>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px" }}>Case Reference</div>
                                                <div className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>{selectedCase.id}</div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-muted text-uppercase" style={{ fontSize: "10.5px" }}>Status</div>
                                                <div className="fw-semibold text-success" style={{ fontSize: "13.5px" }}>Approved & Verified</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Item Handover Guidelines</h5>
                                        <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                            Please ensure the student presents their physical or digital university ID card and signs the property log book upon collection at the secure pickup zone.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card border shadow-sm bg-white rounded p-4">
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Schedule Secure Pickup</h5>
                                        
                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Safe Pickup Zone</label>
                                            <select 
                                                className="form-select shadow-none" 
                                                value={pickupZone} 
                                                onChange={(e) => setPickupZone(e.target.value)}
                                                style={{ fontSize: "13px" }}
                                            >
                                                <option>Security Office Front Desk</option>
                                                <option>Student Union Info Desk</option>
                                                <option>Campus Police Main Office</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Date & Time Slot</label>
                                            <input 
                                                type="text" 
                                                className="form-control shadow-none" 
                                                value={pickupDateTime} 
                                                onChange={(e) => setPickupDateTime(e.target.value)}
                                                style={{ fontSize: "13px" }}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Special Instructions</label>
                                            <textarea 
                                                className="form-control shadow-none" 
                                                rows="3" 
                                                value={specialInstructions} 
                                                onChange={(e) => setSpecialInstructions(e.target.value)}
                                                style={{ fontSize: "12.5px" }}
                                            ></textarea>
                                        </div>

                                        <button 
                                            className="btn text-white w-100 fw-semibold py-2 shadow-sm" 
                                            style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }}
                                            onClick={handleScheduleAndNotify}
                                        >
                                            Confirm Schedule & Notify Student
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : selectedCase.type === 'report-success' ? (
                        /* ================= REPORT SUCCESS STATE VIEW ================= */
                        <div className="p-5 flex-grow-1 d-flex align-items-center justify-content-center">
                            <div className="card border shadow-sm bg-white rounded p-5 text-center" style={{ maxWidth: "500px", width: "100%" }}>
                                <div className="rounded-circle bg-success bg-opacity-15 text-success d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                                    <i className="bi bi-check-lg" style={{ fontSize: "32px" }}></i>
                                </div>
                                <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "20px" }}>Report Published Successfully!</h3>
                                <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                                    Case <strong>{selectedCase.id}</strong> has been verified and successfully published to the active public listings board.
                                </p>
                                <button 
                                    className="btn text-white fw-semibold py-2 px-4 shadow-sm" 
                                    style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                    onClick={handleBackToDashboard}
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* ================= CLAIM SUCCESS STATE VIEW ================= */
                        <div className="p-5 flex-grow-1 d-flex align-items-center justify-content-center">
                            <div className="card border shadow-sm bg-white rounded p-5 text-center" style={{ maxWidth: "500px", width: "100%" }}>
                                <div className="rounded-circle bg-success bg-opacity-15 text-success d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                                    <i className="bi bi-check-lg" style={{ fontSize: "32px" }}></i>
                                </div>
                                <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "20px" }}>Pickup Scheduled Successfully!</h3>
                                <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                                    Case <strong>{selectedCase.id}</strong> has been scheduled for pickup at <strong>{pickupZone}</strong> on <strong>{pickupDateTime}</strong>. A notification has been sent to the student.
                                </p>
                                <button 
                                    className="btn text-white fw-semibold py-2 px-4 shadow-sm" 
                                    style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                    onClick={handleBackToDashboard}
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </div>
                    )
                ) : (
                    /* ================= ORIGINAL DASHBOARD BODY ================= */
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
                                        <span className="badge bg-warning bg-opacity-20 fw-bold px-2 py-0.5" style={{ fontSize: "10px", color:"#ffffff" }}>12</span>
                                    </div>
                                    <div className="d-flex align-items-baseline gap-2">
                                        <h2 className="fw-bold mb-0" style={{ fontSize: "26px" }}>12</h2>
                                        <span className="text-muted" style={{ fontSize: "11.5px" }}>Reports to verify</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Pending Claims</span>
                                        <span className="badge bg-warning bg-opacity-20 fw-bold px-2 py-0.5" style={{ fontSize: "10px", color:"#ffffff" }}>8</span>
                                    </div>
                                    <div className="d-flex align-items-baseline gap-2">
                                        <h2 className="fw-bold mb-0" style={{ fontSize: "26px" }}>8</h2>
                                        <span className="text-muted" style={{ fontSize: "11.5px" }}>Claims under review</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="card border shadow-sm bg-white rounded p-3 position-relative">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <span className="text-muted fw-semibold" style={{ fontSize: "12px" }}>Awaiting Pickup</span>
                                        <span className="badge bg-primary bg-opacity-20 fw-bold px-2 py-0.5" style={{ fontSize: "10px", color:"#ffffff" }}>5</span>
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
                                        <span className="badge bg-success bg-opacity-20 fw-bold px-2 py-0.5" style={{ fontSize: "10px", color:"#ffffff" }}>23</span>
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
                                                    <td><span className="badge bg-danger bg-opacity-15 fw-bold px-3 py-1" style={{ fontSize: "11px", color:"#ffffff" }}>High</span></td>
                                                    <td className="text-end pe-0">
                                                        <button 
                                                            className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                            style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                            onClick={() => handleReviewClick("LNF-2026-000130", "report")}
                                                        >
                                                            Review
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <td className="fw-bold text-dark ps-0 py-3">CLM-2026-000089</td>
                                                    <td className="text-dark">Brass Keyring with Carabiner</td>
                                                    <td className="text-muted">Claim</td>
                                                    <td><span className="badge bg-danger bg-opacity-15 fw-bold px-3 py-1" style={{ fontSize: "11px", color:"#ffffff" }}>High</span></td>
                                                    <td className="text-end pe-0">
                                                        <button 
                                                            className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                            style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                            onClick={() => handleReviewClick("CLM-2026-000089", "claim")}
                                                        >
                                                            Review
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000135</td>
                                                    <td className="text-dark">North Face Backpack</td>
                                                    <td className="text-muted">Report</td>
                                                    <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                                    <td className="text-end pe-0">
                                                        <button 
                                                            className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                            style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                            onClick={() => handleReviewClick("LNF-2026-000135", "report")}
                                                        >
                                                            Review
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <td className="fw-bold text-dark ps-0 py-3">CLM-2026-000091</td>
                                                    <td className="text-dark">Student ID (S. Patel)</td>
                                                    <td className="text-muted">Claim</td>
                                                    <td><span className="badge bg-warning bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px" }}>Medium</span></td>
                                                    <td className="text-end pe-0">
                                                        <button 
                                                            className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                            style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                            onClick={() => handleReviewClick("CLM-2026-000091", "claim")}
                                                        >
                                                            Review
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold text-dark ps-0 py-3">LNF-2026-000139</td>
                                                    <td className="text-dark">Wireless Earbuds Case</td>
                                                    <td className="text-muted">Report</td>
                                                    <td><span className="badge bg-info bg-opacity-20 text-dark fw-bold px-3 py-1" style={{ fontSize: "11px", color:"#ffffff" }}>Low</span></td>
                                                    <td className="text-end pe-0">
                                                        <button 
                                                            className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                            style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "4px" }}
                                                            onClick={() => handleReviewClick("LNF-2026-000139", "report")}
                                                        >
                                                            Review
                                                        </button>
                                                    </td>
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
                )}

            </div>
        </div>
    );
}

export default StaffDashboard;