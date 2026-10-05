import React, { useState } from 'react';

function Dashboard() {
    // State for managing modals, form steps, and success state
    const [selectedItem, setSelectedItem] = useState(null);
    const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [submittedClaimId, setSubmittedClaimId] = useState("");
    
    // Claim form state fields
    const [claimData, setClaimData] = useState({
        detailedDescription: "",
        itemsInside: "",
        identifyingMarks: "",
        dateLocationLost: "",
        uniqueSecretCharacteristic: "",
        evidenceFile: null
    });

    // Sample data for recently reported found items on campus
    const foundItemsData = {
        item1: {
            id: "LNF-2026-00045",
            category: "ELECTRONICS",
            name: "iPhone 15 Pro Max",
            description: "Space Gray finish, found with a black silicone protective case. Battery health is at 94%.",
            location: "Security Office Main Desk",
            dateFound: "Sept 28, 2026",
            status: "Stored & Available",
            imageText: "Phone Img"
        },
        item2: {
            id: "LNF-2026-00051",
            category: "KEYS",
            name: "House Keys with Tag",
            description: "3 brass keys attached to a blue rubberized school tag with a carabiner.",
            location: "Student Center Lost Desk",
            dateFound: "Sept 27, 2026",
            status: "Stored & Available",
            imageText: "Keys Img"
        }
    };

    const handleOpenItem = (itemKey) => {
        setSelectedItem(foundItemsData[itemKey]);
    };

    const handleOpenClaimForm = () => {
        setIsClaimModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClaimData({ ...claimData, [name]: value });
    };

    const handleFileChange = (e) => {
        setClaimData({ ...claimData, evidenceFile: e.target.files[0] });
    };

    const handleSubmitClaimForm = (e) => {
        e.preventDefault();
        
        // Save the reference item ID for the success modal display
        setSubmittedClaimId(selectedItem.id);
        
        // Close previous modals and open the success modal
        setIsClaimModalOpen(false);
        setSelectedItem(null);
        setIsSuccessModalOpen(true);

        // Reset form
        setClaimData({
            detailedDescription: "",
            itemsInside: "",
            identifyingMarks: "",
            dateLocationLost: "",
            uniqueSecretCharacteristic: "",
            evidenceFile: null
        });
    };

    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4 position-relative" style={{ overflowY: "auto" }}>
            
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
                            Check recent campus found items or monitor your active lost reports to keep things secure.
                        </p>
                    </div>

                    {/* METRICS STATS CARDS */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-3">
                            <div className="card border shadow-sm p-3 h-100 bg-white">
                                <div className="text-muted mb-1" style={{ fontSize: "12px" }}>
                                    My Lost Reports <span className="badge bg-danger-subtle text-danger ms-1" style={{ fontSize: "9px" }}>1 active</span>
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

                    {/* RECENT CAMPUS FOUND ITEMS SECTION */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold mb-0" style={{ fontSize: "16px", color: "#1B2A4A" }}>Recent Campus Found Items</h5>
                            <span className="text-primary fw-semibold" style={{ fontSize: "12px", cursor: "pointer" }}>Browse Full Database</span>
                        </div>

                        <div className="row g-3">
                            {/* Found Card 1 */}
                            <div className="col-md-6">
                                <div className="card border shadow-sm p-3 bg-white h-100">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>ELECTRONICS</span>
                                        <span className="badge bg-success-subtle text-success border border-success-subtle" style={{ fontSize: "10px" }}>Secure Storage</span>
                                    </div>

                                    <div className="bg-light rounded border d-flex align-items-center justify-content-center my-2" style={{ height: "90px" }}>
                                        <span className="text-muted small" style={{ fontSize: "11px" }}>Phone Img</span>
                                    </div>

                                    <h6 className="fw-bold mb-1" style={{ fontSize: "13px", color: "#1B2A4A" }}>iPhone 15 Pro Max</h6>
                                    <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Security Office Main Desk</div>
                                    <div className="text-muted mb-3" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Found: Sept 28, 2026</div>
                                    
                                    <button 
                                        className="btn text-white w-100 py-1.5 fw-semibold" 
                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}
                                        onClick={() => handleOpenItem('item1')}
                                    >
                                        View Details / Claim
                                    </button>
                                </div>
                            </div>

                            {/* Found Card 2 */}
                            <div className="col-md-6">
                                <div className="card border shadow-sm p-3 bg-white h-100">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>KEYS</span>
                                        <span className="badge bg-success-subtle text-success border border-success-subtle" style={{ fontSize: "10px" }}>Secure Storage</span>
                                    </div>

                                    <div className="bg-light rounded border d-flex align-items-center justify-content-center my-2" style={{ height: "90px" }}>
                                        <span className="text-muted small" style={{ fontSize: "11px" }}>Keys Img</span>
                                    </div>

                                    <h6 className="fw-bold mb-1" style={{ fontSize: "13px", color: "#1B2A4A" }}>House Keys with Tag</h6>
                                    <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Student Center Lost Desk</div>
                                    <div className="text-muted mb-3" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Found: Sept 27, 2026</div>
                                    
                                    <button 
                                        className="btn text-white w-100 py-1.5 fw-semibold" 
                                        style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}
                                        onClick={() => handleOpenItem('item2')}
                                    >
                                        View Details / Claim
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
                                <div><span className="text-primary fw-bold">•</span> New found item registered in database</div>
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

            {/* MODAL 1: ITEM DETAILS VIEW */}
            {selectedItem && !isClaimModalOpen && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: "10px" }}>
                            
                            <div className="modal-header text-white px-4 py-3" style={{ backgroundColor: "#1B2A4A", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                                <div>
                                    <h5 className="modal-title fw-bold mb-0" style={{ fontSize: "15px" }}>Found Item Details</h5>
                                    <small className="text-white-50" style={{ fontSize: "11px" }}>Case ID: #{selectedItem.id}</small>
                                </div>
                                <button type="button" className="btn-close btn-close-white shadow-none" onClick={() => setSelectedItem(null)}></button>
                            </div>

                            <div className="modal-body p-4 bg-light">
                                <div className="card border shadow-sm p-3 bg-white mb-3">
                                    <div className="bg-light rounded border d-flex align-items-center justify-content-center mb-3" style={{ height: "130px" }}>
                                        <span className="text-muted small" style={{ fontSize: "12px" }}>{selectedItem.imageText}</span>
                                    </div>
                                    <h6 className="fw-bold mb-1" style={{ fontSize: "14px", color: "#1B2A4A" }}>{selectedItem.name}</h6>
                                    <p className="text-muted mb-2" style={{ fontSize: "12px" }}>{selectedItem.description}</p>
                                    <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Current Storage: {selectedItem.location}</div>
                                    <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Date Found: {selectedItem.dateFound}</div>
                                </div>

                                <div className="alert alert-info py-2 mb-0" style={{ fontSize: "11px" }}>
                                    <i className="bi bi-info-circle-fill me-1"></i> 
                                    Think this is your item? Submitting a claim will require answering security verification questions and providing proof of ownership.
                                </div>
                            </div>

                            <div className="modal-footer px-4 py-3 bg-white border-top">
                                <button type="button" className="btn btn-outline-secondary px-3 py-1.5 fw-semibold" style={{ fontSize: "12px" }} onClick={() => setSelectedItem(null)}>
                                    Close
                                </button>
                                <button type="button" className="btn text-white px-4 py-1.5 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }} onClick={handleOpenClaimForm}>
                                    Proceed to Claim Form <i className="bi bi-arrow-right ms-1"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: OWNERSHIP CLAIM & VERIFICATION FORM */}
            {selectedItem && isClaimModalOpen && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: "10px" }}>
                            
                            <div className="modal-header text-white px-4 py-3" style={{ backgroundColor: "#1B2A4A", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                                <div>
                                    <h5 className="modal-title fw-bold mb-0" style={{ fontSize: "15px" }}>Ownership Claim & Verification Form</h5>
                                    <small className="text-white-50" style={{ fontSize: "11px" }}>Claiming Item: {selectedItem.name} (#{selectedItem.id})</small>
                                </div>
                                <button type="button" className="btn-close btn-close-white shadow-none" onClick={() => setIsClaimModalOpen(false)}></button>
                            </div>

                            <form onSubmit={handleSubmitClaimForm}>
                                <div className="modal-body p-4 bg-light" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                                    
                                    <div className="alert alert-warning py-2 mb-3" style={{ fontSize: "11px" }}>
                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                                        Please provide detailed answers to verify your ownership. Public information has been hidden to prevent false claims.
                                    </div>

                                    <div className="card border shadow-sm p-3 bg-white mb-3">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>1. Describe the item in detail (colors, specific features, stickers, or case types):</label>
                                            <textarea 
                                                className="form-control form-control-sm shadow-none" 
                                                rows="2" 
                                                name="detailedDescription" 
                                                value={claimData.detailedDescription} 
                                                onChange={handleInputChange} 
                                                required
                                                style={{ fontSize: "12px" }}
                                                placeholder="e.g., Space Gray with a tiny scratch near the volume button..."
                                            ></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>2. What was inside the item (or digital wallpaper / app folder setup)?</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none" 
                                                name="itemsInside" 
                                                value={claimData.itemsInside} 
                                                onChange={handleInputChange} 
                                                required
                                                style={{ fontSize: "12px" }}
                                                placeholder="e.g., Student ID tucked in back, specific lock screen photo..."
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>3. What identifying mark, damage, or unique characteristic does it have?</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none" 
                                                name="identifyingMarks" 
                                                value={claimData.identifyingMarks} 
                                                onChange={handleInputChange} 
                                                required
                                                style={{ fontSize: "12px" }}
                                                placeholder="e.g., Small crack on bottom right bezel..."
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>4. When and where precisely did you lose it?</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none" 
                                                name="dateLocationLost" 
                                                value={claimData.dateLocationLost} 
                                                onChange={handleInputChange} 
                                                required
                                                style={{ fontSize: "12px" }}
                                                placeholder="e.g., Sept 27 around 2:00 PM at Library Lounge"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>5. Provide a unique secret characteristic not visible in public listings:</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none" 
                                                name="uniqueSecretCharacteristic" 
                                                value={claimData.uniqueSecretCharacteristic} 
                                                onChange={handleInputChange} 
                                                required
                                                style={{ fontSize: "12px" }}
                                                placeholder="e.g., Serial number ending in X92Z or specific engraving inside..."
                                            />
                                        </div>

                                        <div className="mb-0">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "12px" }}>6. Upload Proof/Evidence (Optional receipts, photos, or serial number screenshots):</label>
                                            <input 
                                                type="file" 
                                                className="form-control form-control-sm shadow-none" 
                                                onChange={handleFileChange} 
                                                accept=".jpg,.jpeg,.png,.webp"
                                                style={{ fontSize: "12px" }}
                                            />
                                            <small className="text-muted" style={{ fontSize: "10px" }}>Supported formats: JPG, JPEG, PNG, WebP.</small>
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-footer px-4 py-3 bg-white border-top">
                                    <button type="button" className="btn btn-outline-secondary px-3 py-1.5 fw-semibold" style={{ fontSize: "12px" }} onClick={() => setIsClaimModalOpen(false)}>
                                        Back
                                    </button>
                                    <button type="submit" className="btn text-white px-4 py-1.5 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}>
                                        Submit Claim for Staff Review <i className="bi bi-send ms-1"></i>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 3: SUBMISSION SUCCESS CONFIRMATION MODAL */}
            {isSuccessModalOpen && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg text-center p-4" style={{ borderRadius: "12px" }}>
                            
                            <div className="mb-3 mt-2">
                                <div className="bg-success-subtle text-success rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "64px", height: "64px" }}>
                                    <i className="bi bi-check-lg fs-2"></i>
                                </div>
                            </div>

                            <h4 className="fw-bold mb-2" style={{ color: "#1B2A4A", fontSize: "18px" }}>Claim Submitted Successfully!</h4>
                            <p className="text-muted mb-3" style={{ fontSize: "12px" }}>
                                Your ownership verification form for Item <span className="fw-bold text-dark">#{submittedClaimId}</span> has been received and routed to campus security staff for review.
                            </p>

                            <div className="card bg-light border-0 p-3 mb-4 text-start" style={{ fontSize: "11px" }}>
                                <div className="fw-bold mb-1" style={{ color: "#1B2A4A" }}><i className="bi bi-info-circle me-1"></i> What happens next?</div>
                                <ul className="mb-0 ps-3 text-muted">
                                    <li>Staff will cross-check your secret answers against item logs.</li>
                                    <li>You will receive a notification alert regarding pick-up scheduling.</li>
                                    <li>Track status updates anytime under your active claims tab.</li>
                                </ul>
                            </div>

                            <button 
                                type="button" 
                                className="btn text-white py-2 fw-semibold w-100" 
                                style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px" }} 
                                onClick={() => setIsSuccessModalOpen(false)}
                            >
                                Return to Dashboard
                            </button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Dashboard;