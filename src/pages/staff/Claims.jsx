import React, { useState } from 'react';

function Claims() {
    // Navigation flow states: 'list' | 'review' | 'verification' | 'success'
    const [currentStep, setCurrentStep] = useState('list');
    const [selectedCaseId, setSelectedCaseId] = useState(null);

    // Form states for review
    const [claimEvidence, setClaimEvidence] = useState('Strong evidence');
    const [claimRemarks, setClaimRemarks] = useState('Charm description perfectly validates physical item stored.');

    // Form states for scheduling pickup
    const [pickupZone, setPickupZone] = useState('Security Office Front Desk');
    const [pickupDateTime, setPickupDateTime] = useState('Sep 18, 2026 – 02:00 PM');
    const [specialInstructions, setSpecialInstructions] = useState('Must bring physical Student ID to verify prior to physical handback.');

    // Actions
    const handleVerifyClick = (caseId) => {
        setSelectedCaseId(caseId);
        setCurrentStep('review');
    };

    const handleApproveClaim = () => {
        setCurrentStep('verification');
    };

    const handleRejectClaim = () => {
        setCurrentStep('list');
        setSelectedCaseId(null);
    };

    const handleScheduleAndNotify = () => {
        setCurrentStep('success');
    };

    const handleResetToQueue = () => {
        setCurrentStep('list');
        setSelectedCaseId(null);
    };

    // Dynamic Header Title based on step
    const getHeaderTitle = () => {
        if (currentStep === 'review') return `Review Claim — ${selectedCaseId || 'CLM-2026-000089'}`;
        if (currentStep === 'verification') return 'Ownership Verification';
        if (currentStep === 'success') return 'Claim Process Completed';
        return 'Pending Claims';
    };

    return (
        <div className="d-flex min-vh-100 bg-light w-100" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "18px" }}>
                        {getHeaderTitle()}
                    </h4>
                    
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

                {/* ================= STEP 1: PENDING CLAIMS LIST ================= */}
                {currentStep === 'list' && (
                    <div className="p-4 flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h3 className="fw-bold text-dark mb-1" style={{ fontSize: "20px" }}>Pending Verification Claims</h3>
                                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                    Review and verify ownership evidence submitted by students before claim approval[cite: 8].
                                </p>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary bg-white d-flex align-items-center gap-1.5 px-3 py-1.5 shadow-sm" style={{ fontSize: "12.5px" }}>
                                    <i className="bi bi-filter"></i> Filter By Category
                                </button>
                                <button className="btn btn-dark d-flex align-items-center gap-1.5 px-3 py-1.5 shadow-sm" style={{ fontSize: "12.5px", backgroundColor: "#141D33" }}>
                                    <i className="bi bi-arrow-clockwise"></i> Refresh Queue
                                </button>
                            </div>
                        </div>

                        {/* STAT CARDS */}
                        <div className="row g-3 mb-4">
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <span className="text-muted fw-semibold text-uppercase" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Total Pending Review</span>
                                    <h2 className="fw-bold mb-0 text-dark mt-1" style={{ fontSize: "26px" }}>8 Claims</h2>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <span className="text-muted fw-semibold text-uppercase" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>High Priority Verification</span>
                                    <h2 className="fw-bold mb-0 text-danger mt-1" style={{ fontSize: "26px" }}>3 Claims</h2>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-3">
                                    <span className="text-muted fw-semibold text-uppercase" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Average Review Time</span>
                                    <h2 className="fw-bold mb-0 text-success mt-1" style={{ fontSize: "26px" }}>~12 mins</h2>
                                </div>
                            </div>
                        </div>

                        {/* TABLE CARD */}
                        <div className="card border shadow-sm bg-white rounded p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold text-dark mb-0" style={{ fontSize: "15px" }}>Verification Queue</h5>
                                <span className="text-muted" style={{ fontSize: "12px" }}>Showing 1-1 of 8 pending claims</span>
                            </div>

                            <div className="table-responsive">
                                <table className="table align-middle mb-0" style={{ fontSize: "13px" }}>
                                    <thead>
                                        <tr className="text-muted border-bottom" style={{ fontSize: "12px" }}>
                                            <th className="fw-semibold pb-3 ps-0">Case #</th>
                                            <th className="fw-semibold pb-3">Item Name & Category</th>
                                            <th className="fw-semibold pb-3">Claimant By</th>
                                            <th className="fw-semibold pb-3">Evidence Match</th>
                                            <th className="fw-semibold pb-3">Priority</th>
                                            <th className="fw-semibold pb-3 text-end pe-0">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold text-dark ps-0 py-3">CLM-2026-000089</td>
                                            <td className="text-dark">
                                                Brass Keyring with Carabiner
                                                <div className="text-muted" style={{ fontSize: "11px" }}>Accessories • 87% Match</div>
                                            </td>
                                            <td className="text-dark">
                                                Maria S.
                                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: 948271</div>
                                            </td>
                                            <td><span className="badge bg-success bg-opacity-15 text-success fw-bold px-2 py-1" style={{ fontSize: "11px" }}>87% Match</span></td>
                                            <td><span className="badge bg-danger fw-bold px-3 py-1" style={{ fontSize: "11px", backgroundColor: "#dc3545" }}>High</span></td>
                                            <td className="text-end pe-0">
                                                <div className="d-flex gap-1 justify-content-end">
                                                    <button 
                                                        className="btn btn-sm text-white px-3 py-1 fw-semibold" 
                                                        style={{ backgroundColor: "#141D33", fontSize: "12px", borderRadius: "4px" }}
                                                        onClick={() => handleVerifyClick("CLM-2026-000089")}
                                                    >
                                                        Verify
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger px-2 py-1" style={{ fontSize: "12px", borderRadius: "4px" }}>
                                                        <i className="bi bi-x"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 2: REVIEW CLAIM SCREEN ================= */}
                {currentStep === 'review' && (
                    <div className="p-4 flex-grow-1">
                        <button 
                            className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-1 bg-white" 
                            onClick={handleResetToQueue}
                            style={{ fontSize: "12px" }}
                        >
                            <i className="bi bi-arrow-left"></i> Back to Pending Claims
                        </button>

                        <div className="row g-4">
                            {/* Found Item Details */}
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-4 h-100">
                                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Found Item Details</h5>
                                    <div className="rounded border overflow-hidden mb-3 bg-light" style={{ height: "140px" }}>
                                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" alt="Item" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div className="fw-bold text-dark mb-1" style={{ fontSize: "15px" }}>Brass Keyring with Carabiner</div>
                                    <div className="text-muted mb-2" style={{ fontSize: "12.5px" }}>Category: Accessories / Keys</div>
                                    <div className="text-muted" style={{ fontSize: "12.5px" }}>Storage: Security Office Drawer B</div>
                                </div>
                            </div>

                            {/* Claimant Evidence */}
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-4 h-100 position-relative">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="fw-bold text-dark mb-0" style={{ fontSize: "15px" }}>Claimant Evidence</h5>
                                        <span className="badge bg-success bg-opacity-15 text-success fw-bold px-2 py-1" style={{ fontSize: "11px" }}>87% MATCH</span>
                                    </div>
                                    <div className="text-muted mb-3" style={{ fontSize: "12.5px" }}>
                                        <span className="d-block fw-semibold text-dark mb-1">Q1: Unique Identifiers/Markings?</span>
                                        It has a small brass skull charm attached alongside the silver carabiner loop.
                                    </div>
                                    <div className="text-muted mb-2" style={{ fontSize: "11.5px" }}>Claimant Photo Upload</div>
                                    <div className="rounded border overflow-hidden bg-light" style={{ height: "95px", width: "130px" }}>
                                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80" alt="Evidence" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Moderator Assessment */}
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Moderator Assessment</h5>
                                        
                                        <div className="d-flex flex-column gap-2 mb-3" style={{ fontSize: "13px" }}>
                                            <div className="form-check">
                                                <input className="form-check-input shadow-none" type="radio" name="evidenceEval" id="ev1" checked={claimEvidence === 'Strong evidence'} onChange={() => setClaimEvidence('Strong evidence')} />
                                                <label className="form-check-label text-dark fw-medium" htmlFor="ev1">Strong evidence</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input shadow-none" type="radio" name="evidenceEval" id="ev2" checked={claimEvidence === 'Moderate evidence'} onChange={() => setClaimEvidence('Moderate evidence')} />
                                                <label className="form-check-label text-dark fw-medium" htmlFor="ev2">Moderate evidence</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input shadow-none" type="radio" name="evidenceEval" id="ev3" checked={claimEvidence === 'Weak evidence'} onChange={() => setClaimEvidence('Weak evidence')} />
                                                <label className="form-check-label text-dark fw-medium" htmlFor="ev3">Weak evidence</label>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Assessment Remarks</label>
                                            <textarea className="form-control shadow-none" rows="3" value={claimRemarks} onChange={(e) => setClaimRemarks(e.target.value)} style={{ fontSize: "12.5px" }}></textarea>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column gap-2 pt-2">
                                        <button className="btn btn-outline-success w-100 fw-semibold py-2" style={{ fontSize: "13px", backgroundColor: "#f3faf4" }} onClick={handleApproveClaim}>
                                            Approve Claim
                                        </button>
                                        <button className="btn btn-outline-danger w-100 fw-semibold py-2" style={{ fontSize: "13px", backgroundColor: "#fdf2f2" }} onClick={handleRejectClaim}>
                                            Reject Claim
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 3: OWNERSHIP VERIFICATION SCREEN ================= */}
                {currentStep === 'verification' && (
                    <div className="p-4 flex-grow-1">
                        <div className="text-muted fw-semibold mb-2" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                            4 OWNERSHIP VERIFICATION DETAIL
                        </div>

                        <div className="row g-4">
                            {/* Left Column: Profile & Expanded Evidence */}
                            <div className="col-xl-8 d-flex flex-column gap-4">
                                {/* Claimant Profile Card */}
                                <div className="card border shadow-sm bg-white rounded p-4">
                                    <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Claimant Profile Card</h5>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="rounded-circle overflow-hidden bg-secondary text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Maria S." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark fs-6">Maria S.</div>
                                            <div className="text-muted" style={{ fontSize: "12.5px" }}>Student ID: 948271 | Year: 3rd Year Faculty</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Evidence & Documents */}
                                <div className="card border shadow-sm bg-white rounded p-4">
                                    <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px" }}>Expanded Evidence & Documents</h5>
                                    <p className="text-muted mb-3" style={{ fontSize: "12px" }}>Receipt / Purchase Confirmation screenshot uploaded by claimant:</p>
                                    
                                    <div className="rounded border overflow-hidden bg-light p-2 text-center" style={{ maxHeight: "220px" }}>
                                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Receipt Proof" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Schedule Secure Pickup */}
                            <div className="col-xl-4">
                                <div className="card border shadow-sm bg-white rounded p-4 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "15px" }}>Schedule Secure Pickup</h5>
                                        
                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Safe Pickup Zone</label>
                                            <select 
                                                className="form-select shadow-none text-dark" 
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
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Date & Estimated Time</label>
                                            <input 
                                                type="text" 
                                                className="form-control shadow-none text-dark" 
                                                value={pickupDateTime} 
                                                onChange={(e) => setPickupDateTime(e.target.value)}
                                                style={{ fontSize: "13px" }}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label text-muted" style={{ fontSize: "11.5px" }}>Special Instructions</label>
                                            <textarea 
                                                className="form-control shadow-none text-dark" 
                                                rows="3" 
                                                value={specialInstructions} 
                                                onChange={(e) => setSpecialInstructions(e.target.value)}
                                                style={{ fontSize: "12.5px" }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button 
                                        className="btn text-white w-100 fw-semibold py-2.5 shadow-sm" 
                                        style={{ backgroundColor: "#141D33", fontSize: "13.5px" }}
                                        onClick={handleScheduleAndNotify}
                                    >
                                        Schedule & Notify Student
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 4: SUCCESS / COMPLETED STATE ================= */}
                {currentStep === 'success' && (
                    <div className="p-5 flex-grow-1 d-flex align-items-center justify-content-center">
                        <div className="card border shadow-sm bg-white rounded p-5 text-center" style={{ maxWidth: "500px", width: "100%" }}>
                            <div className="rounded-circle bg-success bg-opacity-15 text-success d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                                <i className="bi bi-check-lg" style={{ fontSize: "32px" }}></i>
                            </div>
                            <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "20px" }}>Pickup Scheduled & Student Notified</h3>
                            <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                                Case <strong>CLM-2026-000089</strong> has been successfully verified. Notification and pickup pass instructions have been dispatched to Maria S.
                            </p>
                            <button 
                                className="btn text-white fw-semibold py-2 px-4 shadow-sm" 
                                style={{ backgroundColor: "#141D33", fontSize: "13px" }}
                                onClick={handleResetToQueue}
                            >
                                Return to Pending Claims Queue
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Claims;