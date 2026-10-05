import React, { useState, useMemo } from 'react';

function BrowseItems() {
    // Search & Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All'); // 'All', 'Lost', 'Found'
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [locationFilter, setLocationFilter] = useState('All');
    const [dateRangeFilter, setDateRangeFilter] = useState('All');
    const [colorFilter, setColorFilter] = useState('All');
    const [brandFilter, setBrandFilter] = useState('All');
    const [sortBy, setSortBy] = useState('newest');

    // View Mode State ('grid' or 'list')
    const [viewMode, setViewMode] = useState('grid');

    // Modal & Claim Workflow States
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalMode, setModalMode] = useState('details'); // 'details' | 'form' | 'success'
    
    // Claim Form Fields State
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [claimFile, setClaimFile] = useState(null);

    // Initial Sample Items Data
    const [items] = useState([
        {
            id: 1,
            code: 'LNF-2026-00045',
            name: 'iPhone 15 Pro Max',
            category: 'Electronics',
            type: 'lost',
            location: 'Library Study Room 3B',
            dateText: 'Today, 10:30 AM',
            daysAgo: 0,
            color: 'Black',
            brand: 'Apple',
            imageText: 'Phone Image',
            description: 'Black iPhone 15 Pro Max with a transparent silicone case. Last seen near the charging station.'
        },
        {
            id: 2,
            code: 'LNF-2026-00046',
            name: 'Brass Keyring & Carabiner',
            category: 'Keys',
            type: 'found',
            location: 'Student Union Lounge',
            dateText: 'Today, 09:15 AM',
            daysAgo: 0,
            color: 'Gold',
            brand: 'Generic',
            imageText: 'Keys Image',
            description: 'Set of 3 keys attached to a brass carabiner, including a dorm room key.'
        },
        {
            id: 3,
            code: 'LNF-2026-00047',
            name: 'North Face Sport Pack',
            category: 'Bags',
            type: 'lost',
            location: 'Gym Lockers Area',
            dateText: 'Yesterday',
            daysAgo: 1,
            color: 'Black',
            brand: 'The North Face',
            imageText: 'Backpack Image',
            description: 'Black backpack containing gym clothes and a notebook.'
        },
        {
            id: 4,
            code: 'LNF-2026-00048',
            name: 'Student ID Card (S. Patel)',
            category: 'IDs & Cards',
            type: 'found',
            location: 'Science Auditorium',
            dateText: '2 days ago',
            daysAgo: 2,
            color: 'Blue',
            brand: 'University',
            imageText: 'ID Card Image',
            description: 'Official university student ID card belonging to S. Patel.'
        },
        {
            id: 5,
            code: 'LNF-2026-00049',
            name: 'Tom Ford Designer Frames',
            category: 'Clothing',
            type: 'lost',
            location: 'Campus Quad Green',
            dateText: '2 days ago',
            daysAgo: 2,
            color: 'Black',
            brand: 'Tom Ford',
            imageText: 'Glasses Image',
            description: 'Black prescription optical frames in a hard leather case.'
        },
        {
            id: 6,
            code: 'LNF-2026-00050',
            name: 'Leather Cardholder (Chase...)',
            category: 'IDs & Cards',
            type: 'found',
            location: 'Computer Lab 10',
            dateText: '3 days ago',
            daysAgo: 3,
            color: 'Brown',
            brand: 'Chase',
            imageText: 'Cardholder Image',
            description: 'Brown leather slim cardholder containing campus cards and transit pass.'
        },
        {
            id: 7,
            code: 'LNF-2026-00051',
            name: 'Hydro Flask 32oz White',
            category: 'Sports',
            type: 'lost',
            location: 'Engineering Atrium',
            dateText: '4 days ago',
            daysAgo: 4,
            color: 'White',
            brand: 'Hydro Flask',
            imageText: 'Bottle Image',
            description: 'White 32oz wide-mouth water bottle with multiple engineering stickers.'
        },
        {
            id: 8,
            code: 'LNF-2026-00052',
            name: 'AirPods Gen 3 Case',
            category: 'Electronics',
            type: 'found',
            location: 'Bus Terminal South',
            dateText: '5 days ago',
            daysAgo: 5,
            color: 'White',
            brand: 'Apple',
            imageText: 'AirPods Image',
            description: 'Apple AirPods Generation 3 charging case (without earbuds inside).'
        }
    ]);

    // Filter and Sort Logic
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  item.location.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesStatus = statusFilter === 'All' || item.type.toLowerCase() === statusFilter.toLowerCase();
            const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
            const matchesLocation = locationFilter === 'All' || item.location === locationFilter;

            let matchesDate = true;
            if (dateRangeFilter === 'Today') {
                matchesDate = item.daysAgo === 0;
            } else if (dateRangeFilter === 'Last 7 Days') {
                matchesDate = item.daysAgo <= 7;
            } else if (dateRangeFilter === 'Last 30 Days') {
                matchesDate = item.daysAgo <= 30;
            }

            const matchesColor = colorFilter === 'All' || item.color === colorFilter;
            const matchesBrand = brandFilter === 'All' || item.brand === brandFilter;

            return matchesSearch && matchesStatus && matchesCategory && matchesLocation && matchesDate && matchesColor && matchesBrand;
        }).sort((a, b) => {
            if (sortBy === 'newest') return a.daysAgo - b.daysAgo;
            if (sortBy === 'oldest') return b.daysAgo - a.daysAgo;
            return 0;
        });
    }, [items, searchTerm, statusFilter, categoryFilter, locationFilter, dateRangeFilter, colorFilter, brandFilter, sortBy]);

    // Handlers for Modal & Claim Flow
    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setModalMode('details');
        setQuestion1('');
        setQuestion2('');
        setQuestion3('');
        setQuestion4('');
        setQuestion5('');
        setClaimFile(null);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setModalMode('details');
    };

    const handleClaimSubmit = (e) => {
        e.preventDefault();
        setModalMode('success');
    };

    return (
        <div className="flex-grow-1 bg-light min-vh-100 p-4" style={{ overflowY: "auto" }}>
            
            {/* TOP NAVBAR HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white px-4 py-3 rounded shadow-sm">
                <div className="d-flex align-items-center gap-3">
                    <h4 className="fw-bold mb-0" style={{ color: "#1B2A4A" }}>Lost & Found Database</h4>
                </div>
                
                <div className="d-flex align-items-center gap-4">
                    <div className="input-group" style={{ width: "280px" }}>
                        <span className="input-group-text bg-light border-end-0 text-muted ps-3">
                            <i className="bi bi-search" style={{ fontSize: "12px" }}></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control bg-light border-start-0 shadow-none text-dark" 
                            placeholder="Quick search items..." 
                            style={{ fontSize: "13px" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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

            {/* BROWSE LIVE DIRECTORY HEADER & FILTERS CARD */}
            <div className="card border shadow-sm p-4 bg-white mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#1B2A4A" }}>
                        Browse Live Directory <span className="text-muted fw-normal" style={{ fontSize: "14px" }}>({filteredItems.length} Active Listings)</span>
                    </h5>
                    
                    {/* WORKING VIEW TOGGLE BUTTONS */}
                    <div className="d-flex gap-1 bg-light p-1 rounded border">
                        <button 
                            className={`btn btn-sm px-2 py-1 ${viewMode === 'grid' ? 'btn-dark text-white' : 'btn-light text-dark'}`}
                            style={{ backgroundColor: viewMode === 'grid' ? '#1B2A4A' : 'transparent', fontSize: "12px" }}
                            onClick={() => setViewMode('grid')}
                            title="Grid View"
                        >
                            <i className="bi bi-grid-fill"></i>
                        </button>
                        <button 
                            className={`btn btn-sm px-2 py-1 ${viewMode === 'list' ? 'btn-dark text-white' : 'btn-light text-dark'}`}
                            style={{ backgroundColor: viewMode === 'list' ? '#1B2A4A' : 'transparent', fontSize: "12px" }}
                            onClick={() => setViewMode('list')}
                            title="List View"
                        >
                            <i className="bi bi-list-ul"></i>
                        </button>
                    </div>
                </div>

                {/* FILTERS BAR */}
                <div className="d-flex flex-wrap align-items-center gap-2 pt-2 border-top">
                    <div className="btn-group" role="group">
                        <button 
                            type="button" 
                            className={`btn btn-sm px-3 ${statusFilter === 'All' ? 'btn-dark text-white' : 'btn-outline-secondary'}`} 
                            style={{ backgroundColor: statusFilter === 'All' ? '#1B2A4A' : '', fontSize: "12px" }}
                            onClick={() => setStatusFilter('All')}
                        >
                            All
                        </button>
                        <button 
                            type="button" 
                            className={`btn btn-sm px-3 ${statusFilter === 'Lost' ? 'btn-dark text-white' : 'btn-outline-secondary'}`} 
                            style={{ backgroundColor: statusFilter === 'Lost' ? '#1B2A4A' : '', fontSize: "12px" }}
                            onClick={() => setStatusFilter('Lost')}
                        >
                            Lost
                        </button>
                        <button 
                            type="button" 
                            className={`btn btn-sm px-3 ${statusFilter === 'Found' ? 'btn-dark text-white' : 'btn-outline-secondary'}`} 
                            style={{ backgroundColor: statusFilter === 'Found' ? '#1B2A4A' : '', fontSize: "12px" }}
                            onClick={() => setStatusFilter('Found')}
                        >
                            Found
                        </button>
                    </div>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none" 
                        style={{ width: "170px", fontSize: "12px" }}
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="All">Category: All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Keys">Keys</option>
                        <option value="Bags">Bags</option>
                        <option value="IDs & Cards">IDs & Cards</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Sports">Sports</option>
                    </select>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none" 
                        style={{ width: "170px", fontSize: "12px" }}
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                        <option value="All">Location: All Buildings</option>
                        <option value="Library Study Room 3B">Library Study Room 3B</option>
                        <option value="Student Union Lounge">Student Union Lounge</option>
                        <option value="Gym Lockers Area">Gym Lockers Area</option>
                        <option value="Science Auditorium">Science Auditorium</option>
                        <option value="Campus Quad Green">Campus Quad Green</option>
                        <option value="Computer Lab 10">Computer Lab 10</option>
                        <option value="Engineering Atrium">Engineering Atrium</option>
                        <option value="Bus Terminal South">Bus Terminal South</option>
                    </select>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none" 
                        style={{ width: "160px", fontSize: "12px" }}
                        value={dateRangeFilter}
                        onChange={(e) => setDateRangeFilter(e.target.value)}
                    >
                        <option value="All">Date Range: All Time</option>
                        <option value="Today">Today</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                        <option value="Last 30 Days">Last 30 Days</option>
                    </select>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none" 
                        style={{ width: "130px", fontSize: "12px" }}
                        value={colorFilter}
                        onChange={(e) => setColorFilter(e.target.value)}
                    >
                        <option value="All">Color: All</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Gold">Gold</option>
                        <option value="Brown">Brown</option>
                    </select>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none" 
                        style={{ width: "140px", fontSize: "12px" }}
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                    >
                        <option value="All">Brand: All</option>
                        <option value="Apple">Apple</option>
                        <option value="The North Face">The North Face</option>
                        <option value="Tom Ford">Tom Ford</option>
                        <option value="Hydro Flask">Hydro Flask</option>
                        <option value="Chase">Chase</option>
                        <option value="Generic">Generic</option>
                        <option value="University">University</option>
                    </select>

                    <select 
                        className="form-select form-select-sm text-dark shadow-none ms-auto" 
                        style={{ width: "150px", fontSize: "12px" }}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">Sort: Newest First</option>
                        <option value="oldest">Sort: Oldest First</option>
                    </select>
                </div>
            </div>

            {/* CONDITIONAL DISPLAY: GRID VIEW vs LIST VIEW */}
            {viewMode === 'grid' ? (
                /* GRID VIEW CONTAINER */
                <div className="row g-4 mb-4">
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <div className="col-md-3" key={item.id}>
                                <div 
                                    className="card shadow-sm border rounded p-3 h-100 bg-white" 
                                    style={{ cursor: "pointer", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                                    onClick={() => handleOpenModal(item)}
                                    title="Click to view details"
                                >
                                    <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                                        <span className="text-muted small">{item.imageText}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>{item.category.toUpperCase()}</span>
                                        <span className={`badge ${item.type === 'lost' ? 'bg-danger' : 'bg-success'} text-white`} style={{ fontSize: "10px" }}>
                                            {item.type.toUpperCase()}
                                        </span>
                                    </div>
                                    <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>{item.name}</h6>
                                    <div className="text-muted mb-1" style={{ fontSize: "11px" }}>
                                        <i className="bi bi-geo-alt me-1"></i> {item.location}
                                    </div>
                                    <div className="text-muted" style={{ fontSize: "11px" }}>
                                        <i className="bi bi-calendar me-1"></i> {item.dateText}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <div className="text-muted fs-5">No matching items found.</div>
                            <p className="text-muted small">Try adjusting your search keywords or filter criteria.</p>
                        </div>
                    )}
                </div>
            ) : (
                /* LIST VIEW CONTAINER */
                <div className="card border shadow-sm mb-4 bg-white overflow-hidden">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0" style={{ fontSize: "13px" }}>
                            <thead className="table-light text-muted border-bottom">
                                <tr>
                                    <th className="ps-4 py-3">Item Name</th>
                                    <th className="py-3">Category</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Location</th>
                                    <th className="py-3">Date</th>
                                    <th className="text-end pe-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.length > 0 ? (
                                    filteredItems.map(item => (
                                        <tr key={item.id} style={{ cursor: "pointer" }} onClick={() => handleOpenModal(item)}>
                                            <td className="ps-4 fw-bold" style={{ color: "#1B2A4A" }}>{item.name}</td>
                                            <td>
                                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>{item.category.toUpperCase()}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${item.type === 'lost' ? 'bg-danger' : 'bg-success'} text-white`} style={{ fontSize: "10px" }}>
                                                    {item.type.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="text-muted"><i className="bi bi-geo-alt me-1"></i>{item.location}</td>
                                            <td className="text-muted"><i className="bi bi-calendar me-1"></i>{item.dateText}</td>
                                            <td className="text-end pe-4">
                                                <button 
                                                    className="btn btn-sm btn-outline-dark py-1 px-2" 
                                                    style={{ fontSize: "11px" }}
                                                    onClick={(e) => { e.stopPropagation(); handleOpenModal(item); }}
                                                >
                                                    View / Claim
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5 text-muted">
                                            No matching items found. Try adjusting your search keywords or filter criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* MODAL WINDOW */}
            {selectedItem && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: "880px" }}>
                        <div className="modal-content border-0 shadow-lg rounded-3 overflow-hidden">
                            
                            {/* MODAL HEADER */}
                            <div className="modal-header border-bottom px-4 py-3 text-white" style={{ backgroundColor: "#1B2A4A" }}>
                                <div>
                                    <h5 className="modal-title fw-bold mb-1" style={{ fontSize: "16px" }}>
                                        {modalMode === 'form' ? 'Ownership Claim & Verification Form' : 'Item Details & Information'}
                                    </h5>
                                    <small className="text-white-50" style={{ fontSize: "12px" }}>
                                        {selectedItem.name} (#{selectedItem.code})
                                    </small>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white shadow-none" 
                                    onClick={handleCloseModal}
                                ></button>
                            </div>

                            {/* MODAL BODY */}
                            <div className="modal-body p-4 bg-light">
                                
                                {modalMode === 'details' && (
                                    <div className="row g-4 align-items-center">
                                        <div className="col-md-5">
                                            <div className="bg-white border rounded d-flex align-items-center justify-content-center shadow-sm" style={{ height: "220px" }}>
                                                <span className="text-muted fw-semibold">{selectedItem.imageText}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="d-flex gap-2 mb-2">
                                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>{selectedItem.category.toUpperCase()}</span>
                                                <span className={`badge ${selectedItem.type === 'lost' ? 'bg-danger' : 'bg-success'} text-white`} style={{ fontSize: "10px" }}>
                                                    {selectedItem.type.toUpperCase()}
                                                </span>
                                            </div>
                                            <h4 className="fw-bold mb-2" style={{ color: "#1B2A4A", fontSize: "18px" }}>{selectedItem.name}</h4>
                                            <p className="text-muted small mb-3">{selectedItem.description}</p>
                                            
                                            <div className="mb-2 text-muted small">
                                                <i className="bi bi-geo-alt me-2 text-dark"></i><strong>Location:</strong> {selectedItem.location}
                                            </div>
                                            <div className="mb-2 text-muted small">
                                                <i className="bi bi-calendar me-2 text-dark"></i><strong>Date:</strong> {selectedItem.dateText}
                                            </div>
                                            <div className="mb-3 text-muted small">
                                                <i className="bi bi-palette me-2 text-dark"></i><strong>Color:</strong> {selectedItem.color} | <strong>Brand:</strong> {selectedItem.brand}
                                            </div>

                                            {/* CLAIM BUTTON SHOWS ONLY WHEN ITEM TYPE IS 'found' */}
                                            {selectedItem.type === 'found' ? (
                                                <button 
                                                    type="button" 
                                                    className="btn btn-sm text-white px-4 py-2 fw-semibold" 
                                                    style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                                    onClick={() => setModalMode('form')}
                                                >
                                                    Proceed to Claim Verification
                                                </button>
                                            ) : (
                                                <div className="alert alert-secondary py-2 px-3 small mb-0 d-inline-block">
                                                    <i className="bi bi-info-circle me-1"></i> This is a registered lost item report. Claim forms are available only for found items.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {modalMode === 'form' && (
                                    <form onSubmit={handleClaimSubmit} id="exactClaimForm">
                                        <div className="alert py-2 px-3 mb-4 rounded border-warning text-dark" style={{ backgroundColor: "#fff3cd", fontSize: "13px" }}>
                                            <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                                            Please provide detailed answers to verify your ownership. Public information has been hidden to prevent false claims.
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                1. Describe the item in detail (colors, specific features, stickers, or case types):
                                            </label>
                                            <textarea 
                                                className="form-control shadow-none text-dark bg-white" 
                                                rows="2"
                                                style={{ fontSize: "13px" }}
                                                placeholder="e.g., Space Gray with a tiny scratch near the volume button..." 
                                                value={question1}
                                                onChange={(e) => setQuestion1(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                2. What was inside the item (or digital wallpaper / app folder setup)?
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none text-dark bg-white py-2" 
                                                style={{ fontSize: "13px" }}
                                                placeholder="e.g., Student ID tucked in back, specific lock screen photo..." 
                                                value={question2}
                                                onChange={(e) => setQuestion2(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                3. What identifying mark, damage, or unique characteristic does it have?
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none text-dark bg-white py-2" 
                                                style={{ fontSize: "13px" }}
                                                placeholder="e.g., Small crack on bottom right bezel..." 
                                                value={question3}
                                                onChange={(e) => setQuestion3(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                4. When and where precisely did you lose it?
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none text-dark bg-white py-2" 
                                                style={{ fontSize: "13px" }}
                                                placeholder="e.g., Sept 27 around 2:00 PM at Library Lounge" 
                                                value={question4}
                                                onChange={(e) => setQuestion4(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                5. Provide a unique secret characteristic not visible in public listings:
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm shadow-none text-dark bg-white py-2" 
                                                style={{ fontSize: "13px" }}
                                                placeholder="e.g., Serial number ending in X92Z or specific engraving inside..." 
                                                value={question5}
                                                onChange={(e) => setQuestion5(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-2">
                                            <label className="form-label fw-bold text-dark" style={{ fontSize: "13px" }}>
                                                6. Upload Proof/Evidence (Optional receipts, photos, or serial number screenshots):
                                            </label>
                                            <div className="input-group input-group-sm">
                                                <input 
                                                    type="file" 
                                                    className="form-control shadow-none bg-white" 
                                                    id="proofFile"
                                                    style={{ fontSize: "13px" }}
                                                    onChange={(e) => setClaimFile(e.target.files[0])}
                                                />
                                            </div>
                                            <div className="text-muted mt-1" style={{ fontSize: "11px" }}>
                                                Supported formats: JPG, JPEG, PNG, WebP.
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {modalMode === 'success' && (
                                    <div className="text-center py-5">
                                        <div className="mb-3 text-success">
                                            <i className="bi bi-check-circle-fill" style={{ fontSize: "52px" }}></i>
                                        </div>
                                        <h4 className="fw-bold mb-2" style={{ color: "#1B2A4A" }}>Claim Submitted Successfully!</h4>
                                        <p className="text-muted small mx-auto" style={{ maxWidth: "450px" }}>
                                            Your verification responses for <strong>{selectedItem.name}</strong> have been securely recorded. Campus staff will cross-check your notes and contact you shortly.
                                        </p>
                                    </div>
                                )}

                            </div>

                            {/* MODAL FOOTER */}
                            <div className="modal-footer bg-white border-top px-4 py-3">
                                {modalMode === 'details' && (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-outline-secondary px-4" 
                                        style={{ fontSize: "13px" }}
                                        onClick={handleCloseModal}
                                    >
                                        Close
                                    </button>
                                )}

                                {modalMode === 'form' && (
                                    <>
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-secondary px-4 py-2" 
                                            style={{ fontSize: "13px" }}
                                            onClick={() => setModalMode('details')}
                                        >
                                            Back
                                        </button>
                                        <button 
                                            type="submit" 
                                            form="exactClaimForm"
                                            className="btn btn-sm text-white px-4 py-2 fw-semibold d-flex align-items-center gap-2" 
                                            style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                        >
                                            Submit Claim for Staff Review <i className="bi bi-send"></i>
                                        </button>
                                    </>
                                )}

                                {modalMode === 'success' && (
                                    <button 
                                        type="button" 
                                        className="btn btn-sm text-white px-5 py-2 mx-auto fw-semibold" 
                                        style={{ backgroundColor: "#1B2A4A", fontSize: "13px" }}
                                        onClick={handleCloseModal}
                                    >
                                        Done
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default BrowseItems;