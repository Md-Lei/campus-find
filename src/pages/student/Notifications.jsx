import React from 'react';

function Notifications() {
    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
           
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Notifications</h4>
                    
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

                {/* NOTIFICATIONS CONTENT BODY */}
                <div className="p-4">
                    
                    {/* Filter Tabs & Mark All as Read Header */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="d-flex align-items-center gap-2 bg-white p-1 rounded border shadow-sm">
                            <button className="btn btn-dark btn-sm px-3 py-1 rounded fw-semibold" style={{ fontSize: "12px", backgroundColor: "#1B2A4A" }}>All <span className="badge bg-secondary ms-1">8</span></button>
                            <button className="btn btn-light btn-sm px-3 py-1 rounded text-muted fw-semibold border-0" style={{ fontSize: "12px" }}>Unread <span className="badge bg-light text-dark border ms-1">3</span></button>
                            <button className="btn btn-light btn-sm px-3 py-1 rounded text-muted fw-semibold border-0" style={{ fontSize: "12px" }}>Reports <span className="badge bg-light text-dark border ms-1">1</span></button>
                            <button className="btn btn-light btn-sm px-3 py-1 rounded text-muted fw-semibold border-0" style={{ fontSize: "12px" }}>Claims <span className="badge bg-light text-dark border ms-1">3</span></button>
                            <button className="btn btn-light btn-sm px-3 py-1 rounded text-muted fw-semibold border-0" style={{ fontSize: "12px" }}>Matches <span className="badge bg-light text-dark border ms-1">2</span></button>
                        </div>

                        <span className="fw-semibold text-primary" style={{ fontSize: "13px", cursor: "pointer" }}>
                            Mark All as Read
                        </span>
                    </div>

                    {/* NOTIFICATIONS LIST CARD CONTAINER */}
                    <div className="bg-white border rounded shadow-sm overflow-hidden">
                        
                        {/* Notification Item 1 (Unread) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span className="text-primary" style={{ fontSize: "8px" }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-check2"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Report Verified</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>Your lost-item report for "Chemistry Textbook" has been verified and posted.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>10 min ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 2 (Unread) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span className="text-primary" style={{ fontSize: "8px" }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-search"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Potential Match Found</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>A found item matches your "iPhone 15 Pro Max" with 87% confidence rating. Click view to compare.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>1 hour ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 3 (Unread) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span className="text-primary" style={{ fontSize: "8px" }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Claim Status Approved</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>Your claim for "North Face Backpack" was approved! Check My Claims to schedule pickup.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>2 hours ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 4 (Read) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "8px", opacity: 0 }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-exclamation-triangle"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Additional Info Required</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>Staff requested supplementary proof of purchase or serial registration inside messages.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>1 day ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 5 (Read) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "8px", opacity: 0 }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-bell"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Welcome to CampusFind!</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>Verify your school directory credentials inside settings to activate high-trust matching.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>3 days ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 6 (Read) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "8px", opacity: 0 }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Claim #CLM-0021 Submitted</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>You successfully submitted ownership proof verification. Moderator response pending.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>4 days ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 7 (Read) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "8px", opacity: 0 }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-trash"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Match Discarded</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>You marked the "Navy blue gym bottle" match suggestion as incorrect.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>1 week ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                        {/* Notification Item 8 (Read) */}
                        <div className="d-flex align-items-center justify-content-between px-4 py-3 bg-white">
                            <div className="d-flex align-items-center gap-3">
                                <span style={{ fontSize: "8px", opacity: 0 }}><i className="bi bi-circle-fill"></i></span>
                                <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                    <i className="bi bi-shield"></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Security Alert: Login from New Device</div>
                                    <div className="text-muted" style={{ fontSize: "12px" }}>Your student portal reported credentials access from building complex Science Hall.</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: "12px" }}>
                                <span>1 week ago</span>
                                <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;