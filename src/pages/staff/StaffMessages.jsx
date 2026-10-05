import React, { useState } from 'react';

function StaffMessages() {
    const [activeTab, setActiveTab] = useState('messages');
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'Maria S.',
            text: 'Hi Officer Dave, I have reviewed my ownership proof claim regarding the lost iPhone 15 Pro Max.',
            time: '10:15 AM',
            isStaff: false
        },
        {
            sender: 'Maria S.',
            text: 'To complete security validation, could you please supply the serial number? You can check this from Apple portal.',
            time: '10:16 AM',
            isStaff: false
        },
        {
            sender: 'Officer Dave',
            text: 'Hi Maria! Yes, here is the serial number: DX4K92PL7OS4. Also, the lock screen wallpaper shows a golden retriever.',
            time: '10:24 AM',
            isStaff: true
        },
        {
            sender: 'Maria S.',
            text: 'Excellent, the lockscreen image and serial number are verified. I am changing your claim status to Approved.',
            time: '10:28 AM',
            isStaff: false
        },
        {
            sender: 'Maria S.',
            text: 'Please pick up your item at Central Library Front Desk 2A anytime during weekday hours.',
            time: '10:29 AM',
            isStaff: false
        }
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        setMessages([
            ...messages,
            {
                sender: 'Officer Dave',
                text: messageInput,
                time: 'Just now',
                isStaff: true
            }
        ]);
        setMessageInput('');
    };

    return (
        <div className="d-flex min-vh-100 bg-light" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>

            {/* MAIN CONTAINER */}
            <div className="flex-grow-1 d-flex flex-column min-vh-100" style={{ overflowY: "auto" }}>
                
                {/* TOP HEADER */}
                <div className="d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom shadow-sm">
                    <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: "18px" }}>
                        Secure Messaging Interface (Staff Portal)
                    </h4>
                    
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

                        <span className="text-muted fw-medium" style={{ fontSize: "13px" }}>
                            Safe Zone Map
                        </span>

                        <div className="position-relative text-muted" style={{ cursor: "pointer" }}>
                            <i className="bi bi-bell" style={{ fontSize: "18px" }}></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                                3
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-2 border-start ps-3">
                            <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold overflow-hidden" style={{ width: "36px", height: "36px" }}>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Officer Dave" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="lh-1">
                                <div className="fw-bold" style={{ fontSize: "13px", color: "#1B2A4A" }}>Officer Dave</div>
                                <div className="text-muted" style={{ fontSize: "11px" }}>ID: CF-9482</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MESSAGING WORKSPACE */}
                <div className="p-4 flex-grow-1 d-flex flex-column">
                    <div className="card border shadow-sm bg-white rounded flex-grow-1 d-flex flex-row overflow-hidden">
                        
                        {/* LEFT CHAT LIST PANEL */}
                        <div className="border-end d-flex flex-column" style={{ width: "340px", backgroundColor: "#FCFDFD" }}>
                            <div className="p-3 border-bottom">
                                <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "16px" }}>Messages</h5>
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-end-0 text-muted ps-3 py-1.5">
                                        <i className="bi bi-search" style={{ fontSize: "11px" }}></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control bg-light border-start-0 shadow-none text-muted py-1.5" 
                                        placeholder="Search messages..." 
                                        style={{ fontSize: "12.5px" }}
                                    />
                                </div>
                            </div>

                            <div className="flex-grow-1 overflow-auto">
                                <div className="p-3 border-bottom bg-white cursor-pointer" style={{ borderLeft: "4px solid #1B2A4A" }}>
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-bold text-dark" style={{ fontSize: "13px" }}>Maria S. (Student)</span>
                                        <span className="text-muted" style={{ fontSize: "10.5px" }}>10:30 AM</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Thanks so much for verifying my claim serial...
                                    </div>
                                </div>

                                <div className="p-3 border-bottom bg-light cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13px" }}>Alex Morgan</span>
                                        <span className="text-muted" style={{ fontSize: "10.5px" }}>Yesterday</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Is the brass keyring still available for pickup?
                                    </div>
                                </div>

                                <div className="p-3 border-bottom bg-light cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13px" }}>Campus Security desk</span>
                                        <span className="text-muted" style={{ fontSize: "10.5px" }}>Sep 12</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Confirmed: Item CLM-241 holds valid logs...
                                    </div>
                                </div>

                                <div className="p-3 border-bottom bg-light cursor-pointer">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-semibold text-dark" style={{ fontSize: "13px" }}>Shaunak Patel</span>
                                        <span className="text-muted" style={{ fontSize: "10.5px" }}>Sep 05</span>
                                    </div>
                                    <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                        Could you check report status for iPhone 15?
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONVERSATION THREAD PANEL */}
                        <div className="flex-grow-1 d-flex flex-column bg-white">
                            
                            {/* ACTIVE CHAT HEADER */}
                            <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center fw-bold overflow-hidden" style={{ width: "38px", height: "38px" }}>
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Maria S." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>Maria S.</span>
                                            <span className="badge bg-success bg-opacity-15 text-success px-2 py-0.5" style={{ fontSize: "10px" }}>STUDENT</span>
                                            <span className="text-success" style={{ fontSize: "11px" }}>● Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-light border text-muted px-2 py-1" style={{ fontSize: "12px" }}>
                                    <i className="bi bi-gear"></i>
                                </button>
                            </div>

                            {/* CASE CONTEXT BANNER */}
                            <div className="bg-light px-4 py-2 border-bottom d-flex justify-content-between align-items-center" style={{ fontSize: "12.5px" }}>
                                <span className="text-primary fw-medium">
                                    <i className="bi bi-shield-lock me-1"></i> Re: Claim #CLM-2026-000089 — iPhone 15 Pro Max
                                </span>
                                <a href="#claim-details" className="text-decoration-none fw-semibold" style={{ color: "#1B2A4A" }}>
                                    View Claim Detail
                                </a>
                            </div>

                            {/* CHAT MESSAGES BODY */}
                            <div className="flex-grow-1 p-4 overflow-auto d-flex flex-column gap-3 bg-white" style={{ fontSize: "13px" }}>
                                {messages.map((msg, index) => (
                                    <div 
                                        key={index} 
                                        className={`d-flex flex-column ${msg.isStaff ? 'align-items-end' : 'align-items-start'}`}
                                    >
                                        <div 
                                            className={`p-3 rounded shadow-sm ${msg.isStaff ? 'text-white' : 'bg-light text-dark border'}`}
                                            style={{ 
                                                maxWidth: "65%", 
                                                backgroundColor: msg.isStaff ? "#1B2A4A" : "#F8F9FA",
                                                borderRadius: "10px" 
                                            }}
                                        >
                                            {msg.text}
                                        </div>
                                        <span className="text-muted mt-1 px-1" style={{ fontSize: "10.5px" }}>
                                            {msg.time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CHAT INPUT FORM */}
                            <div className="p-3 border-top bg-white">
                                <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                                    <button type="button" className="btn btn-light border text-muted px-2 py-2" style={{ fontSize: "14px" }}>
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                    <input 
                                        type="text" 
                                        className="form-control shadow-none bg-light border-0 py-2" 
                                        placeholder="Write secure response message..." 
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        style={{ fontSize: "13px" }}
                                    />
                                    <button 
                                        type="submit" 
                                        className="btn text-white px-4 fw-semibold py-2" 
                                        style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default StaffMessages;