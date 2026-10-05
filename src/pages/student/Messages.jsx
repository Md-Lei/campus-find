import React, { useState } from 'react';

function Messages() {
    // Initial conversations state
    const [conversations, setConversations] = useState([
        {
            id: 1,
            name: 'Officer Dave (Moderator)',
            role: 'STAFF MODERATOR',
            badgeClass: 'bg-warning bg-opacity-15 text-warning',
            badgeStyle: { fontSize: "10px", color: "#b45309" },
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
            online: true,
            claimRef: 'Re: Claim #CLM-2026-000089 — iPhone 15 Pro Max',
            lastTime: '10:30 AM',
            unread: true,
            messages: [
                { sender: 'Dave Miller', text: 'Hi Maria, I have reviewed your ownership proof claim regarding the lost iPhone 15 Pro Max.', time: '10:15 AM', isUser: false },
                { sender: 'Dave Miller', text: 'To complete security validation, could you please supply the serial number? You can check this from Apple portal.', time: '10:16 AM', isUser: false },
                { sender: 'You', text: 'Hi Officer Dave! Yes, here is the serial number: DX4K92PL70S4. Also, the lock screen wallpaper shows a golden retriever.', time: '10:24 AM', isUser: true },
                { sender: 'Dave Miller', text: 'Excellent, the lockscreen image and serial number are verified. I am changing your claim status to Approved.', time: '10:28 AM', isUser: false },
                { sender: 'Dave Miller', text: 'Please pick up your item at Central Library Front Desk 2A anytime during weekday hours.', time: '10:29 AM', isUser: false }
            ]
        },
        {
            id: 2,
            name: 'Professor Alan',
            role: 'FACULTY',
            badgeClass: 'bg-info bg-opacity-15 text-info',
            badgeStyle: { fontSize: "10px", color: "#0284c7" },
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
            online: false,
            claimRef: 'Re: Report #REP-2026-0412 — Leather Notebook',
            lastTime: 'Yesterday',
            unread: false,
            messages: [
                { sender: 'Professor Alan', text: 'Did you find any leather-bound notes left near Lecture Hall 3?', time: 'Yesterday 3:15 PM', isUser: false },
                { sender: 'You', text: 'Hello Professor! I haven\'t seen that specific one yet, but I can keep an eye out or check with campus security.', time: 'Yesterday 4:00 PM', isUser: true }
            ]
        },
        {
            id: 3,
            name: 'Campus Security desk',
            role: 'ADMIN',
            badgeClass: 'bg-secondary bg-opacity-15 text-secondary',
            badgeStyle: { fontSize: "10px", color: "#475569" },
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
            online: true,
            claimRef: 'Re: Case #CLM-2026-000072',
            lastTime: 'Sep 12',
            unread: false,
            messages: [
                { sender: 'Campus Security desk', text: 'Confirmed: Item CLM-241 holds valid verification seals.', time: 'Sep 12, 11:00 AM', isUser: false }
            ]
        },
        {
            id: 4,
            name: 'Sarah Jenkins',
            role: 'STUDENT',
            badgeClass: 'bg-success bg-opacity-15 text-success',
            badgeStyle: { fontSize: "10px", color: "#15803d" },
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
            online: false,
            claimRef: 'Re: Lost Hydro Flask Water Bottle',
            lastTime: 'Sep 05',
            unread: false,
            messages: [
                { sender: 'Sarah Jenkins', text: 'Thanks so much for returning my laptop charger at the front desk!', time: 'Sep 05, 1:20 PM', isUser: false }
            ]
        }
    ]);

    // Active conversation state
    const [activeConvId, setActiveConvId] = useState(1);
    
    // Search states
    const [sidebarSearch, setSidebarSearch] = useState('');
    const [messageInput, setMessageInput] = useState('');

    // Get currently active conversation object
    const activeConversation = conversations.find(c => c.id === activeConvId) || conversations[0];

    // Select conversation and mark as read
    const handleSelectConversation = (id) => {
        setActiveConvId(id);
        setConversations(conversations.map(c => c.id === id ? { ...c, unread: false } : c));
    };

    // Send new message
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const updatedConversations = conversations.map(conv => {
            if (conv.id === activeConvId) {
                return {
                    ...conv,
                    lastTime: currentTime,
                    messages: [
                        ...conv.messages,
                        { sender: 'You', text: messageInput.trim(), time: currentTime, isUser: true }
                    ]
                };
            }
            return conv;
        });

        setConversations(updatedConversations);
        setMessageInput('');
    };

    // Filter conversations list by sidebar search query
    const filteredConversations = conversations.filter(c => 
        c.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
        c.claimRef.toLowerCase().includes(sidebarSearch.toLowerCase())
    );

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

                        <span className="text-muted fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }} onClick={() => alert("Opening Safe Zone Map...")}>
                            Safe Zone Map
                        </span>

                        <div className="position-relative cursor-pointer" onClick={() => alert("You have 3 unread notifications.")}>
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
                                        value={sidebarSearch}
                                        onChange={(e) => setSidebarSearch(e.target.value)}
                                        style={{ fontSize: "13px" }}
                                    />
                                </div>
                            </div>

                            {/* Chat List Items */}
                            <div className="overflow-auto flex-grow-1">
                                {filteredConversations.map((conv) => {
                                    const lastMsg = conv.messages[conv.messages.length - 1];
                                    const isActive = conv.id === activeConvId;

                                    return (
                                        <div 
                                            key={conv.id}
                                            onClick={() => handleSelectConversation(conv.id)}
                                            className={`p-3 border-bottom cursor-pointer position-relative ${isActive ? 'bg-light' : 'bg-white'}`}
                                            style={{ cursor: "pointer", transition: "background-color 0.15s" }}
                                        >
                                            <div className="d-flex justify-content-between align-items-start mb-1">
                                                <span className={`fw-bold ${isActive ? 'text-dark' : 'text-secondary'}`} style={{ fontSize: "13.5px" }}>{conv.name}</span>
                                                <span className="text-muted" style={{ fontSize: "11px" }}>{conv.lastTime}</span>
                                            </div>
                                            <div className="text-muted text-truncate" style={{ fontSize: "12px" }}>
                                                {lastMsg ? lastMsg.text : conv.claimRef}
                                            </div>
                                            {conv.unread && (
                                                <span className="position-absolute bottom-0 end-0 m-3 bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: ACTIVE CHAT PANEL */}
                        <div className="flex-grow-1 d-flex flex-column bg-white">
                            
                            {/* Chat Header */}
                            <div className="px-4 py-3 border-bottom d-flex justify-content-between align-items-center bg-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="rounded-circle overflow-hidden bg-secondary text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "38px", height: "38px" }}>
                                        <img src={activeConversation.avatar} alt={activeConversation.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>{activeConversation.name}</span>
                                            <span className={`badge fw-semibold px-2 py-0.5 ${activeConversation.badgeClass}`} style={activeConversation.badgeStyle}>{activeConversation.role}</span>
                                            {activeConversation.online && (
                                                <span className="text-success d-flex align-items-center gap-1" style={{ fontSize: "11px" }}>
                                                    <i className="bi bi-circle-fill" style={{ fontSize: "6px" }}></i> Online
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-muted cursor-pointer fs-5" onClick={() => alert("Opening chat settings...")}>
                                    <i className="bi bi-gear"></i>
                                </div>
                            </div>

                            {/* Claim Context Banner */}
                            <div className="px-4 py-2 bg-primary bg-opacity-10 border-bottom d-flex justify-content-between align-items-center" style={{ fontSize: "12.5px" }}>
                                <div className="d-flex align-items-center gap-2 text-primary fw-semibold">
                                    <i className="bi bi-shield-check"></i>
                                    <span>{activeConversation.claimRef}</span>
                                </div>
                                <span className="text-primary fw-semibold cursor-pointer text-decoration-underline" style={{ fontSize: "12px" }} onClick={() => alert("Navigating to Claim Details...")}>
                                    View Claim Detail
                                </span>
                            </div>

                            {/* Messages Thread Container */}
                            <div className="p-4 flex-grow-1 overflow-auto d-flex flex-column gap-3 bg-light bg-opacity-50">
                                {activeConversation.messages.map((msg, index) => (
                                    <div key={index} className={`d-flex flex-column ${msg.isUser ? 'align-self-end align-items-end' : 'align-items-start'}`}>
                                        <div 
                                            className={`p-3 rounded shadow-sm ${msg.isUser ? 'text-white' : 'bg-white border text-dark'}`} 
                                            style={{ 
                                                backgroundColor: msg.isUser ? "#1B2A4A" : "#ffffff", 
                                                fontSize: "13.5px", 
                                                maxWidth: "520px", 
                                                borderTopLeftRadius: msg.isUser ? "8px" : "2px",
                                                borderTopRightRadius: msg.isUser ? "2px" : "8px"
                                            }}
                                        >
                                            {msg.text}
                                        </div>
                                        <span className="text-muted mt-1" style={{ fontSize: "10.5px" }}>{msg.time}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Input Footer */}
                            <form onSubmit={handleSendMessage} className="p-3 border-top bg-white d-flex align-items-center gap-3">
                                <button type="button" className="btn btn-light border text-secondary d-flex align-items-center justify-content-center p-2 rounded-circle shadow-none" style={{ width: "36px", height: "36px", flexShrink: 0 }} onClick={() => alert("Attach file dialog opened.")}>
                                    <i className="bi bi-plus-lg" style={{ fontSize: "14px" }}></i>
                                </button>
                                <input 
                                    type="text" 
                                    className="form-control bg-light border-0 shadow-none text-muted py-2.5 px-3" 
                                    placeholder="Write secure response message..." 
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    style={{ fontSize: "13.5px" }}
                                />
                                <button type="submit" className="btn text-white px-4 py-2 fw-semibold shadow-none" style={{ backgroundColor: "#1B2A4A", fontSize: "13px", borderRadius: "6px", flexShrink: 0 }}>
                                    Send
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;