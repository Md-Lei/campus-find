import React from 'react';

function Messages() {
    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>

            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Messages</h4>
                    
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

                {/* MESSAGING INTERFACE BODY */}
                <div className="p-4 flex-grow-1 d-flex">
                    <div className="card border shadow-sm w-100 bg-white rounded overflow-hidden d-flex flex-row" style={{ minHeight: "calc(100vh - 140px)" }}>
                        
                        {/* LEFT COLUMN: CONVERSATION LIST */}
                        <div className="border-end d-flex flex-column" style={{ width: "340px", backgroundColor: "#fff" }}>
                            
                            {/* Search Messages Bar */}
                            <div className="p-3 border-bottom">
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-end-0 text-muted ps-3" style={{ fontSize: "12px" }}>
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control bg-light border-start-0 shadow-none text-muted" 
                                        placeholder="Search messages..." 
                                        style={{ fontSize: "13px" }}
                                    />
                                </div>
                            </div>

                            {/* Chat List Items */}
                            <div className="overflow-auto flex-grow-1">
                                
                                {/* Active Chat Item (Cleaned up, no blue focus ring shadow) */}
                                <div className="p-3 border-bottom bg-light cursor-pointer position-relative">
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                        <span className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>Officer Dave (Moderator)</span>
                                        <span className="text-muted" style={{ fontSize: "11px" }}>10:30 AM</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        maria, please verify your serial nu...
                                    </div>
                                    <span className="position-absolute bottom-0 end-0 m-3 bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></span>
                                </div>

                                {/* Chat Item 2 */}
                                <div className="p-3 border-bottom bg-white cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Professor Alan</span>
                                        <span className="text-muted" style={{ fontSize: "11px" }}>Yesterday</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Did you find any leather-bound no...
                                    </div>
                                </div>

                                {/* Chat Item 3 */}
                                <div className="p-3 border-bottom bg-white cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Campus Security desk</span>
                                        <span className="text-muted" style={{ fontSize: "11px" }}>Sep 12</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Confirmed: Item CLM-241 holds v...
                                    </div>
                                </div>

                                {/* Chat Item 4 */}
                                <div className="p-3 border-bottom bg-white cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13.5px" }}>Sarah Jenkins</span>
                                        <span className="text-muted" style={{ fontSize: "11px" }}>Sep 05</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Thanks so much for returning my la...
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT COLUMN: ACTIVE CHAT PANEL */}
                        <div className="flex-grow-1 d-flex flex-column bg-white">
                            
                            {/* Chat Header */}
                            <div className="px-4 py-3 border-bottom d-flex justify-content-between align-items-center bg-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle overflow-hidden bg-secondary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "38px", height: "38px" }}>
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Dave Miller" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>Dave Miller</span>
                                            <span className="badge bg-warning bg-opacity-15 text-warning fw-semibold px-2 py-0.5" style={{ fontSize: "10px", color: "#b45309 !important" }}>STAFF MODERATOR</span>
                                            <span className="text-success d-flex align-items-center gap-1" style={{ fontSize: "11px" }}>
                                                <i className="bi bi-circle-fill" style={{ fontSize: "6px" }}></i> Online
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-muted cursor-pointer fs-5">
                                    <i className="bi bi-gear"></i>
                                </div>
                            </div>

                            {/* Claim Context Banner */}
                            <div className="px-4 py-2 bg-primary bg-opacity-10 border-bottom d-flex justify-content-between align-items-center" style={{ fontSize: "12.5px" }}>
                                <div className="d-flex align-items-center gap-2 text-primary fw-semibold">
                                    <i className="bi bi-shield-check"></i>
                                    <span>Re: Claim #CLM-2026-000089 — iPhone 15 Pro Max</span>
                                </div>
                                <span className="text-primary fw-semibold cursor-pointer text-decoration-underline" style={{ fontSize: "12px" }}>
                                    View Claim Detail
                                </span>
                            </div>

                            {/* Messages Thread Container (Expanded height to remove excessive white space) */}
                            <div className="p-4 flex-grow-1 overflow-auto d-flex flex-column gap-3 bg-light bg-opacity-50">
                                
                                {/* Incoming Message 1 */}
                                <div className="d-flex flex-column align-items-start max-w-75">
                                    <div className="p-3 rounded bg-white border text-dark shadow-sm" style={{ fontSize: "13.5px", maxWidth: "520px", borderTopLeftRadius: "2px" }}>
                                        Hi Maria, I have reviewed your ownership proof claim regarding the lost iPhone 15 Pro Max.
                                    </div>
                                    <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>10:15 AM</span>
                                </div>

                                {/* Incoming Message 2 */}
                                <div className="d-flex flex-column align-items-start max-w-75">
                                    <div className="p-3 rounded bg-white border text-dark shadow-sm" style={{ fontSize: "13.5px", maxWidth: "520px", borderTopLeftRadius: "2px" }}>
                                        To complete security validation, could you please supply the serial number? You can check this from Apple portal.
                                    </div>
                                    <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>10:16 AM</span>
                                </div>

                                {/* Outgoing Message (User Reply) */}
                                <div className="d-flex flex-column align-items-end align-self-end">
                                    <div className="p-3 rounded text-white shadow-sm" style={{ backgroundColor: "#1B2A4A", fontSize: "13.5px", maxWidth: "520px", borderTopRightRadius: "2px" }}>
                                        Hi Officer Dave! Yes, here is the serial number: DX4K92PL70S4. Also, the lock screen wallpaper shows a golden retriever.
                                    </div>
                                    <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>10:24 AM</span>
                                </div>

                                {/* Incoming Message 3 */}
                                <div className="d-flex flex-column align-items-start max-w-75">
                                    <div className="p-3 rounded bg-white border text-dark shadow-sm" style={{ fontSize: "13.5px", maxWidth: "520px", borderTopLeftRadius: "2px" }}>
                                        Excellent, the lockscreen image and serial number are verified. I am changing your claim status to Approved.
                                    </div>
                                    <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>10:28 AM</span>
                                </div>

                                {/* Incoming Message 4 */}
                                <div className="d-flex flex-column align-items-start max-w-75">
                                    <div className="p-3 rounded bg-white border text-dark shadow-sm" style={{ fontSize: "13.5px", maxWidth: "520px", borderTopLeftRadius: "2px" }}>
                                        Please pick up your item at Central Library Front Desk 2A anytime during weekday hours.
                                    </div>
                                    <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>10:29 AM</span>
                                </div>

                            </div>

                            {/* Chat Input Footer */}
                            <div className="p-3 border-top bg-white d-flex align-items-center gap-3">
                                <button className="btn btn-light border text-secondary d-flex align-items-center justify-content-center p-2 rounded-circle" style={{ width: "36px", height: "36px", flexShrink: 0 }}>
                                    <i className="bi bi-plus-lg" style={{ fontSize: "14px" }}></i>
                                </button>
                                <input 
                                    type="text" 
                                    className="form-control bg-light border-0 shadow-none text-muted py-2.5 px-3" 
                                    placeholder="Write secure response message..." 
                                    style={{ fontSize: "13.5px" }}
                                />
                                <button className="btn text-white px-4 py-2 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px", flexShrink: 0 }}>
                                    Send
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;