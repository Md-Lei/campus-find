import React, { useState } from 'react';

function MyClaims() {
    // State to manage the list of claims
    const [claims, setClaims] = useState([
        {
            id: 'CLM-2026-000089',
            title: 'iPhone 15 Pro Max',
            date: 'Sep 16, 2026',
            status: 'Under Review',
            badgeBg: '#fef3c7',
            badgeColor: '#d97706',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80',
            step: 2,
            moderator: 'Dave',
            message: 'Maria, please verify your serial number inside the secure Messages tab to complete verification.',
            messageBg: 'bg-light border-start border-3 border-secondary text-muted',
            actionButtonText: 'Message Moderator',
            actionButtonBg: '#1B2A4A',
            actionHandler: 'message'
        },
        {
            id: 'CLM-2026-000072',
            title: 'Sony WH-1000XM4',
            date: 'Sep 12, 2026',
            status: 'Pending Verification',
            badgeBg: '#dbeafe',
            badgeColor: '#2563eb',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80',
            step: 1,
            moderator: 'Sarah',
            message: 'Please provide exact identification detail of any scratch markings.',
            messageBg: 'bg-light border-start border-3 border-secondary text-muted',
            actionButtonText: 'Message Moderator',
            actionButtonBg: '#1B2A4A',
            actionHandler: 'message'
        },
        {
            id: 'CLM-2026-000065',
            title: 'North Face Backpack',
            date: 'Sep 05, 2026',
            status: 'Approved & Scheduled',
            badgeBg: '#dcfce7',
            badgeColor: '#166534',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=100&q=80',
            step: 3,
            moderator: 'Admin Desk',
            message: 'Pickup Zone: Central Library Front Desk 2A (Schedule: M-F 9am-4pm)',
            messageBg: 'bg-success bg-opacity-10 text-success border-start border-3 border-success fw-semibold',
            actionButtonText: 'Schedule Pickup',
            actionButtonBg: '#1B2A4A',
            actionHandler: 'schedule'
        },
        {
            id: 'CLM-2026-000041',
            title: 'Leather Billfold Wallet',
            date: 'Aug 29, 2026',
            status: 'Rejected',
            badgeBg: '#fee2e2',
            badgeColor: '#991b1b',
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=100&q=80',
            step: 'rejected',
            moderator: 'Dave',
            message: 'Reason: ID and lock codes did not match the verification proof provided by current claimant.',
            messageBg: 'bg-danger bg-opacity-10 text-danger border-start border-3 border-danger',
            actionButtonText: 'Message Moderator',
            actionButtonBg: '#1B2A4A',
            actionHandler: 'message'
        }
    ]);

    // Search filter state
    const [searchTerm, setSearchTerm] = useState('');

    // Modal & Drawer States
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [selectedClaimToCancel, setSelectedClaimToCancel] = useState(null);
    const [cancelReason, setCancelReason] = useState('');

    const [chatDrawerOpen, setChatDrawerOpen] = useState(false);
    const [activeChatClaim, setActiveChatClaim] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Open Cancel Confirmation Modal
    const promptCancelClaim = (claim) => {
        setSelectedClaimToCancel(claim);
        setCancelReason('');
        setCancelModalOpen(true);
    };

    // Execute Claim Cancellation
    const confirmCancelClaim = () => {
        if (!selectedClaimToCancel) return;
        setClaims(claims.filter(c => c.id !== selectedClaimToCancel.id));
        setCancelModalOpen(false);
        setSelectedClaimToCancel(null);
    };

    // Open Chat Drawer / Conversation
    const openModeratorChat = (claim) => {
        setActiveChatClaim(claim);
        // Preload default initial thread based on claim info
        setChatMessages([
            { sender: claim.moderator, text: claim.message, time: '10:00 AM' },
            { sender: 'You', text: `Hello, following up regarding my claim for ${claim.title} (${claim.id}).`, time: '10:05 AM' }
        ]);
        setChatDrawerOpen(true);
    };

    // Send Message inside Chat Drawer
    const handleSendChatMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setChatMessages([
            ...chatMessages,
            { sender: 'You', text: newMessage.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);
        setNewMessage('');
    };

    // Main action handler selector
    const handleActionClick = (claim) => {
        if (claim.actionHandler === 'message') {
            openModeratorChat(claim);
        } else if (claim.actionHandler === 'schedule') {
            alert(`Opening appointment scheduling portal for pickup of ${claim.title} (${claim.id})...`);
        }
    };

    const filteredClaims = claims.filter(claim => 
        claim.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4 position-relative" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>My Claims</h4>
                
                <div className="d-flex align-items-center gap-4">
                    <div className="input-group" style={{ width: "280px" }}>
                        <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                            <i className="bi bi-search" style={{ fontSize: "12px" }}></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control bg-light border-start-0 shadow-none text-muted" 
                            placeholder="Quick search items..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ fontSize: "13px" }}
                        />
                    </div>

                    <span className="text-muted fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }} onClick={() => alert("Opening Safe Zone Map...")}>
                        Safe Zone Map
                    </span>

                    <div className="position-relative cursor-pointer" onClick={() => alert("You have 3 unread system notifications.")}>
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
                You have {filteredClaims.length} active claims in progress.
            </div>

            {/* CLAIMS CARDS GRID */}
            <div className="row g-4">
                {filteredClaims.map((claim) => (
                    <div className="col-xl-6" key={claim.id}>
                        <div className="card border shadow-sm bg-white p-4 h-100" style={{ borderRadius: "10px" }}>
                            
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="rounded text-white" style={{ width: "42px", height: "42px", background: `url('${claim.image}') center/cover no-repeat` }}></div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: "#1B2A4A", fontSize: "15px" }}>{claim.title}</h6>
                                        <div className="text-muted" style={{ fontSize: "11.5px" }}>Case: {claim.id} • Claimed on {claim.date}</div>
                                    </div>
                                </div>
                                <span className="badge px-2.5 py-1" style={{ backgroundColor: claim.badgeBg, color: claim.badgeColor, fontSize: "11px", fontWeight: "600", borderRadius: "6px" }}>
                                    {claim.status}
                                </span>
                            </div>

                            <div className="text-uppercase text-muted fw-bold mb-2" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>CLAIM PROGRESS TIMELINE</div>
                            
                            {/* TIMELINE RENDERER */}
                            <div className="mb-3 px-1">
                                {claim.step === 2 && (
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
                                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: "18px", height: "18px", fontSize: "9px" }}>2</div>
                                            <span className="fw-semibold text-primary" style={{ fontSize: "12px" }}>Staff Review</span>
                                        </div>

                                        <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                            <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>3</div>
                                            <span className="text-muted" style={{ fontSize: "12px" }}>Pickup Ready</span>
                                        </div>
                                    </div>
                                )}

                                {claim.step === 1 && (
                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                        <div className="position-absolute" style={{ height: "4px", backgroundColor: "#e2e8f0", top: "50%", transform: "translateY(-50%)", left: "15px", width: "84%", zIndex: 1 }}></div>

                                        <div className="d-flex align-items-center gap-2 position-relative bg-white pe-2" style={{ zIndex: 3 }}>
                                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow-sm" style={{ width: "18px", height: "18px" }}>
                                                <i className="bi bi-check" style={{ fontSize: "11px", strokeWidth: "3px" }}></i>
                                            </div>
                                            <span className="fw-semibold text-primary" style={{ fontSize: "12px" }}>Submitted</span>
                                        </div>

                                        <div className="d-flex align-items-center gap-2 position-relative bg-white px-2" style={{ zIndex: 3 }}>
                                            <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>2</div>
                                            <span className="text-muted" style={{ fontSize: "12px" }}>Staff Review</span>
                                        </div>

                                        <div className="d-flex align-items-center gap-2 position-relative bg-white ps-2" style={{ zIndex: 3 }}>
                                            <div className="rounded-circle border border-secondary text-muted d-flex align-items-center justify-content-center bg-white" style={{ width: "16px", height: "16px", fontSize: "9px" }}>3</div>
                                            <span className="text-muted" style={{ fontSize: "12px" }}>Pickup Ready</span>
                                        </div>
                                    </div>
                                )}

                                {claim.step === 3 && (
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
                                )}

                                {claim.step === 'rejected' && (
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
                                )}
                            </div>

                            <div className={`p-2.5 rounded mb-3 d-flex align-items-center gap-2 ${claim.messageBg}`} style={{ fontSize: "12px" }}>
                                <i className="bi bi-chat-left-text flex-shrink-0" style={{ fontSize: "13px" }}></i>
                                <span>{claim.message}</span>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-auto">
                                <button 
                                    onClick={() => promptCancelClaim(claim)}
                                    className="btn btn-outline-danger btn-sm px-3 py-1.5 fw-semibold shadow-none" 
                                    style={{ fontSize: "12px", borderRadius: "6px" }}
                                >
                                    Cancel Claim
                                </button>
                                <button 
                                    onClick={() => handleActionClick(claim)}
                                    className="btn btn-sm text-white px-3 py-1.5 fw-semibold shadow-none" 
                                    style={{ backgroundColor: claim.actionButtonBg, fontSize: "12px", borderRadius: "6px" }}
                                >
                                    {claim.actionButtonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= CANCEL CLAIM CONFIRMATION MODAL ================= */}
            {cancelModalOpen && selectedClaimToCancel && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
                    <div className="bg-white rounded p-4 shadow-lg" style={{ width: "420px", maxWidth: "90%" }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold mb-0 text-danger">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>Cancel Claim
                            </h5>
                            <button type="button" className="btn-close shadow-none" onClick={() => setCancelModalOpen(false)}></button>
                        </div>
                        <p className="text-muted" style={{ fontSize: "13px" }}>
                            Are you sure you want to cancel your claim for <strong className="text-dark">{selectedClaimToCancel.title}</strong> (Case: <span className="text-dark">{selectedClaimToCancel.id}</span>)? This action cannot be undone.
                        </p>
                        <div className="mb-3">
                            <label className="form-label fw-semibold text-secondary" style={{ fontSize: "12px" }}>Reason for cancellation (optional):</label>
                            <textarea 
                                className="form-control form-control-sm shadow-none" 
                                rows="2" 
                                placeholder="e.g., Found item elsewhere, mistake..."
                                value={cancelReason}
                                onChange={(e) => setCancelReason(e.target.value)}
                                style={{ fontSize: "13px" }}
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-outline-secondary btn-sm px-3" onClick={() => setCancelModalOpen(false)} style={{ fontSize: "12px" }}>Keep Claim</button>
                            <button className="btn btn-danger btn-sm px-3 fw-semibold" onClick={confirmCancelClaim} style={{ fontSize: "12px" }}>Yes, Cancel Claim</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MESSAGES / CHAT MODERATOR DRAWER ================= */}
            {chatDrawerOpen && activeChatClaim && (
                <div className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column border-start" style={{ width: "400px", maxWidth: "100%", zIndex: 1060 }}>
                    {/* Chat Header */}
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-white">
                        <div className="d-flex align-items-center gap-2">
                            <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "35px", height: "35px", fontSize: "13px" }}>
                                {activeChatClaim.moderator.charAt(0)}
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0" style={{ color: "#1B2A4A", fontSize: "14px" }}>Moderator {activeChatClaim.moderator}</h6>
                                <div className="text-muted" style={{ fontSize: "11px" }}>Case: {activeChatClaim.id}</div>
                            </div>
                        </div>
                        <button type="button" className="btn-close shadow-none" onClick={() => setChatDrawerOpen(false)}></button>
                    </div>

                    {/* Chat Messages Body */}
                    <div className="flex-grow-1 p-3 bg-light overflow-auto d-flex flex-column gap-3" style={{ fontSize: "13px" }}>
                        <div className="text-center">
                            <span className="badge bg-secondary bg-opacity-20 text-muted px-2 py-1 rounded" style={{ fontSize: "10px" }}>Secure Verification Chat Opened</span>
                        </div>
                        {chatMessages.map((msg, index) => (
                            <div key={index} className={`d-flex flex-column ${msg.sender === 'You' ? 'align-items-end' : 'align-items-start'}`}>
                                <div className="text-muted mb-1" style={{ fontSize: "10px" }}>{msg.sender} • {msg.time}</div>
                                <div className={`p-2.5 rounded shadow-sm ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-white text-dark border'}`} style={{ maxWidth: "80%", fontSize: "12.5px" }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input Footer */}
                    <form onSubmit={handleSendChatMessage} className="p-3 border-top bg-white d-flex gap-2">
                        <input 
                            type="text" 
                            className="form-control form-control-sm shadow-none" 
                            placeholder="Type a message to moderator..." 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            style={{ fontSize: "13px" }}
                        />
                        <button type="submit" className="btn btn-sm text-white px-3 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "12px" }}>
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </form>
                </div>
            )}

        </div>
    );
}

export default MyClaims;