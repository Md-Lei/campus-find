import React, { useState } from 'react';

function Notifications() {
    // Initial notifications state with detailed descriptions for the modal
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            category: 'reports',
            title: 'Report Verified',
            shortDesc: 'Your lost-item report for "Chemistry Textbook" has been verified and posted.',
            fullDetails: 'Your submitted lost-item report for the "Chemistry Textbook" (Case ID: REP-2026-0891) has undergone preliminary inspection by campus security, successfully verified against log registries, and is now publicly live on the campus bulletin board.',
            time: '10 min ago',
            timestamp: 'September 30, 2026 - 5:55 PM',
            icon: 'bi-check2',
            read: false
        },
        {
            id: 2,
            category: 'matches',
            title: 'Potential Match Found',
            shortDesc: 'A found item matches your "iPhone 15 Pro Max" with 87% confidence rating. Click view to compare.',
            fullDetails: 'Our AI pattern-matching algorithm and staff cross-referencing identified a found item logged at Science Hall that exhibits an 87% similarity score to your missing "iPhone 15 Pro Max" (Serial match pending). Please review comparison images.',
            time: '1 hour ago',
            timestamp: 'September 30, 2026 - 5:05 PM',
            icon: 'bi-search',
            read: false
        },
        {
            id: 3,
            category: 'claims',
            title: 'Claim Status Approved',
            shortDesc: 'Your claim for "North Face Backpack" was approved! Check My Claims to schedule pickup.',
            fullDetails: 'Your ownership verification proof for the "North Face Backpack" (Case: CLM-2026-000065) has been fully approved by Moderator Dave. You are now cleared to schedule your pickup at the Central Library Front Desk 2A.',
            time: '2 hours ago',
            timestamp: 'September 30, 2026 - 4:05 PM',
            icon: 'bi-shield-check',
            read: false
        },
        {
            id: 4,
            category: 'claims',
            title: 'Additional Info Required',
            shortDesc: 'Staff requested supplementary proof of purchase or serial registration inside messages.',
            fullDetails: 'Staff reviewer Sarah requires additional clarification regarding your claim submission. Please open the secure Messages tab for case CLM-2026-000072 and upload supplementary proof of purchase or clear serial code close-up photos.',
            time: '1 day ago',
            timestamp: 'September 29, 2026 - 2:30 PM',
            icon: 'bi-exclamation-triangle',
            read: true
        },
        {
            id: 5,
            category: 'all',
            title: 'Welcome to CampusFind!',
            shortDesc: 'Verify your school directory credentials inside settings to activate high-trust matching.',
            fullDetails: 'Welcome to the official campus lost and found portal, Maria! To ensure maximum security and priority matching, please verify your school directory credentials under your profile settings.',
            time: '3 days ago',
            timestamp: 'September 27, 2026 - 9:00 AM',
            icon: 'bi-bell',
            read: true
        },
        {
            id: 6,
            category: 'claims',
            title: 'Claim #CLM-0021 Submitted',
            shortDesc: 'You successfully submitted ownership proof verification. Moderator response pending.',
            fullDetails: 'Your digital submission containing purchase receipts and custom identifier tags for claim #CLM-2026-000041 has been securely received. A moderator will review your documents within 24 to 48 hours.',
            time: '4 days ago',
            timestamp: 'September 26, 2026 - 11:15 AM',
            icon: 'bi-file-earmark-text',
            read: true
        },
        {
            id: 7,
            category: 'matches',
            title: 'Match Discarded',
            shortDesc: 'You marked the "Navy blue gym bottle" match suggestion as incorrect.',
            fullDetails: 'You successfully dismissed the suggested match for item "Navy blue gym bottle" (Match ID: MTH-9921). The system has updated its learning weights to filter out similar mismatch configurations.',
            time: '1 week ago',
            timestamp: 'September 23, 2026 - 3:40 PM',
            icon: 'bi-trash',
            read: true
        },
        {
            id: 8,
            category: 'all',
            title: 'Security Alert: Login from New Device',
            shortDesc: 'Your student portal reported credentials access from building complex Science Hall.',
            fullDetails: 'A successful login session to your CampusFind account was recorded from a Chrome browser on macOS at Science Hall network subnet. If this was you, no further action is required.',
            time: '1 week ago',
            timestamp: 'September 22, 2026 - 8:20 AM',
            icon: 'bi-shield',
            read: true
        }
    ]);

    // Active filter tab state ('all', 'unread', 'reports', 'claims', 'matches')
    const [activeTab, setActiveTab] = useState('all');

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    // Modal state for viewing full notification details
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Handle clicking a notification item: mark as read and open modal
    const handleNotificationClick = (notif) => {
        // Mark as read in state
        setNotifications(notifications.map(n => n.id === notif.id ? { ...n, read: true } : n));
        setSelectedNotification(notif);
        setModalOpen(true);
    };

    // Mark all notifications as read
    const handleMarkAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    // Filter notifications based on tab and search query
    const filteredNotifications = notifications.filter(notif => {
        const matchesSearch = notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              notif.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (!matchesSearch) return false;

        if (activeTab === 'unread') return !notif.read;
        if (activeTab === 'reports') return notif.category === 'reports';
        if (activeTab === 'claims') return notif.category === 'claims';
        if (activeTab === 'matches') return notif.category === 'matches';
        return true; // 'all'
    });

    // Count badges
    const unreadCount = notifications.filter(n => !n.read).length;
    const reportsCount = notifications.filter(n => n.category === 'reports').length;
    const claimsCount = notifications.filter(n => n.category === 'claims').length;
    const matchesCount = notifications.filter(n => n.category === 'matches').length;

    return (
        <div className="d-flex min-vh-100 bg-light position-relative" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
           
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ fontSize: "13px" }}
                            />
                        </div>

                        <span className="text-muted fw-semibold" style={{ fontSize: "13px", cursor: "pointer" }} onClick={() => alert("Opening Safe Zone Map...")}>
                            Safe Zone Map
                        </span>

                        <div className="position-relative cursor-pointer" onClick={() => alert(`You have ${unreadCount} unread notifications.`)}>
                            <i className="bi bi-bell fs-5 text-secondary"></i>
                            {unreadCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                                    {unreadCount}
                                </span>
                            )}
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
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                        <div className="d-flex align-items-center gap-2 bg-white p-1 rounded border shadow-sm">
                            <button 
                                onClick={() => setActiveTab('all')} 
                                className={`btn btn-sm px-3 py-1 rounded fw-semibold ${activeTab === 'all' ? 'text-white' : 'text-muted bg-light border-0'}`} 
                                style={{ fontSize: "12px", backgroundColor: activeTab === 'all' ? "#1B2A4A" : "transparent" }}
                            >
                                All <span className={`badge ms-1 ${activeTab === 'all' ? 'bg-secondary text-white' : 'bg-white text-dark border'}`}>{notifications.length}</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('unread')} 
                                className={`btn btn-sm px-3 py-1 rounded fw-semibold ${activeTab === 'unread' ? 'text-white' : 'text-muted bg-light border-0'}`} 
                                style={{ fontSize: "12px", backgroundColor: activeTab === 'unread' ? "#1B2A4A" : "transparent" }}
                            >
                                Unread <span className={`badge ms-1 ${activeTab === 'unread' ? 'bg-secondary text-white' : 'bg-white text-dark border'}`}>{unreadCount}</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('reports')} 
                                className={`btn btn-sm px-3 py-1 rounded fw-semibold ${activeTab === 'reports' ? 'text-white' : 'text-muted bg-light border-0'}`} 
                                style={{ fontSize: "12px", backgroundColor: activeTab === 'reports' ? "#1B2A4A" : "transparent" }}
                            >
                                Reports <span className={`badge ms-1 ${activeTab === 'reports' ? 'bg-secondary text-white' : 'bg-white text-dark border'}`}>{reportsCount}</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('claims')} 
                                className={`btn btn-sm px-3 py-1 rounded fw-semibold ${activeTab === 'claims' ? 'text-white' : 'text-muted bg-light border-0'}`} 
                                style={{ fontSize: "12px", backgroundColor: activeTab === 'claims' ? "#1B2A4A" : "transparent" }}
                            >
                                Claims <span className={`badge ms-1 ${activeTab === 'claims' ? 'bg-secondary text-white' : 'bg-white text-dark border'}`}>{claimsCount}</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('matches')} 
                                className={`btn btn-sm px-3 py-1 rounded fw-semibold ${activeTab === 'matches' ? 'text-white' : 'text-muted bg-light border-0'}`} 
                                style={{ fontSize: "12px", backgroundColor: activeTab === 'matches' ? "#1B2A4A" : "transparent" }}
                            >
                                Matches <span className={`badge ms-1 ${activeTab === 'matches' ? 'bg-secondary text-white' : 'bg-white text-dark border'}`}>{matchesCount}</span>
                            </button>
                        </div>

                        <span className="fw-semibold text-primary" style={{ fontSize: "13px", cursor: "pointer" }} onClick={handleMarkAllAsRead}>
                            Mark All as Read
                        </span>
                    </div>

                    {/* NOTIFICATIONS LIST CARD CONTAINER */}
                    <div className="bg-white border rounded shadow-sm overflow-hidden">
                        {filteredNotifications.length === 0 ? (
                            <div className="text-center p-5 text-muted" style={{ fontSize: "14px" }}>
                                <i className="bi bi-bell-slash fs-3 d-mb-2"></i>
                                <div className="mt-2">No notifications found in this view.</div>
                            </div>
                        ) : (
                            filteredNotifications.map((notif, index) => (
                                <div 
                                    key={notif.id} 
                                    onClick={() => handleNotificationClick(notif)}
                                    className={`d-flex align-items-center justify-content-between px-4 py-3 bg-white cursor-pointer transition-hover ${index !== filteredNotifications.length - 1 ? 'border-bottom' : ''}`}
                                    style={{ cursor: "pointer", transition: "background-color 0.2s" }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ffffff"}
                                >
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="text-primary" style={{ fontSize: "8px", opacity: notif.read ? 0 : 1 }}>
                                            <i className="bi bi-circle-fill"></i>
                                        </span>
                                        <div className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
                                            <i className={`bi ${notif.icon}`}></i>
                                        </div>
                                        <div>
                                            <div className="fw-bold text-dark" style={{ fontSize: "13.5px" }}>{notif.title}</div>
                                            <div className="text-muted" style={{ fontSize: "12px" }}>{notif.shortDesc}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 text-muted flex-shrink-0" style={{ fontSize: "12px" }}>
                                        <span>{notif.time}</span>
                                        <i className="bi bi-chevron-right" style={{ fontSize: "11px" }}></i>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* ================= FULL NOTIFICATION DETAILS MODAL ================= */}
            {modalOpen && selectedNotification && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
                    <div className="bg-white rounded p-4 shadow-lg" style={{ width: "480px", maxWidth: "90%" }}>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", fontSize: "18px" }}>
                                    <i className={`bi ${selectedNotification.icon}`}></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>{selectedNotification.title}</h5>
                                    <div className="text-muted" style={{ fontSize: "11.5px" }}>Received on {selectedNotification.timestamp}</div>
                                </div>
                            </div>
                            <button type="button" className="btn-close shadow-none" onClick={() => setModalOpen(false)}></button>
                        </div>

                        <hr className="text-muted opacity-25" />

                        <div className="mb-4 text-dark" style={{ fontSize: "13.5px", lineHeight: "1.6" }}>
                            <p className="fw-semibold mb-2 text-secondary" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Notification Details:</p>
                            <p className="p-3 bg-light rounded border-start border-3 border-primary mb-0">
                                {selectedNotification.fullDetails}
                            </p>
                        </div>

                        <div className="d-flex justify-content-end gap-2">
                            <button 
                                className="btn btn-sm text-white px-4 fw-semibold shadow-none" 
                                style={{ backgroundColor: "#1B2A4A", fontSize: "12px", borderRadius: "6px" }}
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Notifications;