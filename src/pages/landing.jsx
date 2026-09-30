import loginLogo from "../assets/loginLogo.png";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="bg-white min-vh-100 d-flex flex-column">
            
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-4">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                            src={loginLogo}
                            alt="Campus Lost and Found Logo"
                            style={{ height: "28px", width: "auto" }}
                        />
                        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1B2A4A" }}>CampusFind</div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <span className="text-muted" style={{ fontSize: "14px", cursor: "pointer" }}>How It Works</span>
                        <span className="text-muted" style={{ fontSize: "14px", cursor: "pointer" }}>Browse Items</span>
                        <span className="text-muted" style={{ fontSize: "14px", cursor: "pointer" }}>About CF</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <Link to="/login" className="btn btn-outline-secondary px-4 py-2" style={{ fontSize: "14px", borderRadius: "6px" }}>Login</Link>
                        <Link to="/register" className="btn px-4 py-2 text-white" style={{ backgroundColor: "#1B2A4A", fontSize: "14px", borderRadius: "6px" }}>Register</Link>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <div className="container text-center py-5 my-4">
                <h1 className="fw-bold mb-3" style={{ fontSize: "42px", color: "#1B2A4A" }}>Lost something on campus?</h1>
                <p className="text-muted mb-4 mx-auto" style={{ fontSize: "16px", maxWidth: "600px" }}>
                    Find what you've lost. Return what you find. The unified smart retrieval network for campus items.
                </p>

                {/* SEARCH BAR */}
                <div className="input-group shadow-sm p-2 bg-white rounded border mx-auto mb-4" style={{ maxWidth: "700px" }}>
                    <span className="input-group-text bg-white border-0 text-muted ps-3">
                        <i className="bi bi-search"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control border-0 shadow-none" 
                        placeholder="Search for 'iPhone 15', 'Keys', 'Black Backpack'..."
                        style={{ fontSize: "14px" }}
                    />
                    <select className="form-select border-0 text-muted shadow-none" style={{ maxWidth: "160px", fontSize: "14px" }}>
                        <option>All Categories</option>
                    </select>
                    <button className="btn text-white px-4" style={{ backgroundColor: "#1B2A4A", borderRadius: "6px", fontSize: "14px" }}>
                        Search Network
                    </button>
                </div>

                {/* ACTION BUTTONS */}
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn text-white px-4 py-2 fw-semibold" style={{ backgroundColor: "#1B2A4A", fontSize: "14px", borderRadius: "6px" }}>
                        Report Lost Item <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                    <button className="btn btn-outline-secondary px-4 py-2 fw-semibold" style={{ fontSize: "14px", borderRadius: "6px", color: "#1B2A4A", borderColor: "#dee2e6" }}>
                        Report Found Item
                    </button>
                </div>
            </div>

            {/* STATS BANNER */}
            <div className="py-4 text-white" style={{ backgroundColor: "#1B2A4A" }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="fw-bold" style={{ fontSize: "28px" }}>1,247</div>
                            <div className="text-uppercase " style={{ fontSize: "11px", letterSpacing: "1px", color:"#ffffff" }}>Items Reported</div>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="fw-bold" style={{ fontSize: "28px" }}>892</div>
                            <div className="text-uppercase " style={{ fontSize: "11px", letterSpacing: "1px", color:"#ffffff" }}>Items Returned</div>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="fw-bold" style={{ fontSize: "28px" }}>94%</div>
                            <div className="text-uppercase " style={{ fontSize: "11px", letterSpacing: "1px", color:"#ffffff" }}>Recovery Rate</div>
                        </div>
                        <div className="col-md-3">
                            <div className="fw-bold" style={{ fontSize: "28px" }}>3,500+</div>
                            <div className="text-uppercase " style={{ fontSize: "11px", letterSpacing: "1px", color:"#ffffff" }}>Active Users</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RECENTLY REPORTED ITEMS */}
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: "22px", color: "#1B2A4A" }}>Recently Reported Items</h2>
                        <p className="text-muted mb-0" style={{ fontSize: "13px" }}>Real-time feed of items found or lost across various campus locations.</p>
                    </div>
                    <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: "13px", borderRadius: "6px" }}>View All Live Reports</button>
                </div>

                <div className="row g-4">
                    {/* Item Card 1 */}
                    <div className="col-md-3">
                        <div className="card shadow-sm border rounded p-3 h-100">
                            <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                                <span className="text-muted small">Phone Image</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>ELECTRONICS</span>
                                <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                            </div>
                            <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>iPhone 15 Pro Max</h6>
                            <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Library Study Room 3B</div>
                            <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Today, 10:30 AM</div>
                        </div>
                    </div>

                    {/* Item Card 2 */}
                    <div className="col-md-3">
                        <div className="card shadow-sm border rounded p-3 h-100">
                            <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                                <span className="text-muted small">Keys Image</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>KEYS</span>
                                <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                            </div>
                            <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Brass Keyring with Carabiner</h6>
                            <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Student Union Lounge</div>
                            <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Today, 09:15 AM</div>
                        </div>
                    </div>

                    {/* Item Card 3 */}
                    <div className="col-md-3">
                        <div className="card shadow-sm border rounded p-3 h-100">
                            <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                                <span className="text-muted small">Backpack Image</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>BAGS</span>
                                <span className="badge bg-danger text-white" style={{ fontSize: "10px" }}>LOST</span>
                            </div>
                            <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>North Face Black Backpack</h6>
                            <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Gym Lockers</div>
                            <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> Yesterday</div>
                        </div>
                    </div>

                    {/* Item Card 4 */}
                    <div className="col-md-3">
                        <div className="card shadow-sm border rounded p-3 h-100">
                            <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
                                <span className="text-muted small">ID Card Image</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="badge bg-light text-dark border" style={{ fontSize: "10px" }}>IDS & CARDS</span>
                                <span className="badge bg-success text-white" style={{ fontSize: "10px" }}>FOUND</span>
                            </div>
                            <h6 className="fw-bold mb-2" style={{ fontSize: "14px", color: "#1B2A4A" }}>Student ID Card (S. Patel)</h6>
                            <div className="text-muted mb-1" style={{ fontSize: "11px" }}><i className="bi bi-geo-alt me-1"></i> Science Auditorium</div>
                            <div className="text-muted" style={{ fontSize: "11px" }}><i className="bi bi-calendar me-1"></i> 2 days ago</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HOW CAMPUS FIND WORKS */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-1" style={{ fontSize: "24px", color: "#1B2A4A" }}>How CampusFind Works</h2>
                    <p className="text-muted mb-5" style={{ fontSize: "14px" }}>A simple, verified, and secure cycle for getting lost items back to their rightful owners.</p>

                    <div className="row">
                        <div className="col">
                            <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-primary" style={{ width: "40px", height: "40px" }}>1</div>
                            <h6 className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>Report</h6>
                            <p className="text-muted" style={{ fontSize: "12px" }}>Instantly post details & photos of the item lost or found.</p>
                        </div>
                        <div className="col">
                            <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-primary" style={{ width: "40px", height: "40px" }}>2</div>
                            <h6 className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>Search</h6>
                            <p className="text-muted" style={{ fontSize: "12px" }}>Our system auto-matches titles, tags, and coordinates.</p>
                        </div>
                        <div className="col">
                            <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-primary" style={{ width: "40px", height: "40px" }}>3</div>
                            <h6 className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>Claim</h6>
                            <p className="text-muted" style={{ fontSize: "12px" }}>Submit ownership proof or schedule verification.</p>
                        </div>
                        <div className="col">
                            <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-primary" style={{ width: "40px", height: "40px" }}>4</div>
                            <h6 className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>Verify</h6>
                            <p className="text-muted" style={{ fontSize: "12px" }}>Staff or owners cross-check details securely.</p>
                        </div>
                        <div className="col">
                            <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-primary" style={{ width: "40px", height: "40px" }}>5</div>
                            <h6 className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>Return</h6>
                            <p className="text-muted" style={{ fontSize: "12px" }}>Meet at designated safe campus pickup spots.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BROWSE BY CATEGORY SECTION */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-1" style={{ fontSize: "24px", color: "#1B2A4A" }}>Browse by Category</h2>
                    <p className="text-muted" style={{ fontSize: "14px" }}>Select a category to filter live listings on campus.</p>
                </div>

                <div className="row g-3">
                    <div className="col-md-3">
                        <div className="card border shadow-sm p-3 text-center h-100">
                            <div className="mb-2 text-primary fs-4"><i className="bi bi-laptop"></i></div>
                            <h6 className="fw-bold mb-0" style={{ fontSize: "14px", color: "#1B2A4A" }}>Electronics</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border shadow-sm p-3 text-center h-100">
                            <div className="mb-2 text-primary fs-4"><i className="bi bi-book"></i></div>
                            <h6 className="fw-bold mb-0" style={{ fontSize: "14px", color: "#1B2A4A" }}>Books & Notebooks</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border shadow-sm p-3 text-center h-100">
                            <div className="mb-2 text-primary fs-4"><i className="bi bi-eyeglasses"></i></div>
                            <h6 className="fw-bold mb-0" style={{ fontSize: "14px", color: "#1B2A4A" }}>Clothing</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border shadow-sm p-3 text-center h-100">
                            <div className="mb-2 text-primary fs-4"><i className="bi bi-watch"></i></div>
                            <h6 className="fw-bold mb-0" style={{ fontSize: "14px", color: "#1B2A4A" }}>Accessories</h6>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESIGNED FOR CAMPUS SAFETY & TRUST */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-1" style={{ fontSize: "24px", color: "#1B2A4A" }}>Designed for Campus Safety & Trust</h2>
                    <p className="text-muted mb-5 mx-auto" style={{ fontSize: "14px", maxWidth: "600px" }}>
                        Unlike generic social media groups, CampusFind protects student privacy and ensures verified returns.
                    </p>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card border shadow-sm p-4 text-start h-100 bg-white">
                                <div className="rounded bg-light p-2 d-inline-flex mb-3 text-primary"><i className="bi bi-shield-check fs-5"></i></div>
                                <h5 className="fw-bold mb-2" style={{ fontSize: "16px", color: "#1B2A4A" }}>Verified Claims</h5>
                                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                    Claimants must provide detailed verification (e.g., serial keys, unique scratch markings, lock screen code) before any handback.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border shadow-sm p-4 text-start h-100 bg-white">
                                <div className="rounded bg-light p-2 d-inline-flex mb-3 text-primary"><i className="bi bi-lock fs-5"></i></div>
                                <h5 className="fw-bold mb-2" style={{ fontSize: "16px", color: "#1B2A4A" }}>Secure Messaging</h5>
                                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                    Communicate securely within the app using student portal authentication, keeping your personal phone number private.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border shadow-sm p-4 text-start h-100 bg-white">
                                <div className="rounded bg-light p-2 d-inline-flex mb-3 text-primary"><i className="bi bi-check-circle fs-5"></i></div>
                                <h5 className="fw-bold mb-2" style={{ fontSize: "16px", color: "#1B2A4A" }}>Staff Moderated</h5>
                                <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                                    Every post and campus handback is moderated and cross-checked by university safety officers to prevent fraudulent claims.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* POPULAR CAMPUS LOCATIONS */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-2" style={{ fontSize: "24px", color: "#1B2A4A" }}>Popular Campus Locations</h2>
                        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>We track item reports according to designated college centers to establish quick retrieval.</p>

                        <div className="d-flex flex-column gap-3">
                            <div className="p-3 border rounded shadow-sm d-flex justify-content-between align-items-center bg-white">
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}><i className="bi bi-building me-2"></i> Central Library</span>
                                <span className="text-muted" style={{ fontSize: "12px" }}>14 Active Reports</span>
                            </div>
                            <div className="p-3 border rounded shadow-sm d-flex justify-content-between align-items-center bg-white">
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}><i className="bi bi-cup-hot me-2"></i> Main Cafeteria</span>
                                <span className="text-muted" style={{ fontSize: "12px" }}>8 Active Reports</span>
                            </div>
                            <div className="p-3 border rounded shadow-sm d-flex justify-content-between align-items-center bg-white">
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}><i className="bi bi-activity me-2"></i> Student Union Gym</span>
                                <span className="text-muted" style={{ fontSize: "12px" }}>5 Active Reports</span>
                            </div>
                            <div className="p-3 border rounded shadow-sm d-flex justify-content-between align-items-center bg-white">
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}><i className="bi bi-mortarboard me-2"></i> Science Lecture Halls</span>
                                <span className="text-muted" style={{ fontSize: "12px" }}>11 Active Reports</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light border rounded p-4 text-center d-flex align-items-center justify-content-center" style={{ height: "350px" }}>
                            <span className="text-muted">Interactive Campus Layout Map Illustration</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION BANNER */}
            <div className="py-5 text-white text-center" style={{ backgroundColor: "#1B2A4A" }}>
                <div className="container py-3">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "28px" }}>Found something? Help a fellow student.</h2>
                    <p className="text-muted mb-4 mx-auto" style={{ fontSize: "14px", maxWidth: "600px" }}>
                        Returning items fosters a trustworthy student community. Report found items instantly to notify matching reports.
                    </p>
                    <button className="btn btn-light px-4 py-2 fw-semibold" style={{ fontSize: "14px", color: "#1B2A4A", borderRadius: "6px" }}>
                        Report Found Item Now
                    </button>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-white border-top py-4 mt-auto">
                <div className="container" style={{ fontSize: "12px" }}>
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                <img src={loginLogo} alt="Logo" style={{ height: "20px", width: "auto" }} />
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#1B2A4A" }}>CampusFind</span>
                            </div>
                            <p className="text-muted mb-0" style={{ maxWidth: "260px" }}>
                                The official university-endorsed recovery portal. Secure, verified, and moderated by security and student affairs.
                            </p>
                        </div>
                        <div className="col-md-2">
                            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "12px" }}>Sitemap</h6>
                            <ul className="list-unstyled text-muted">
                                <li>Browse Items</li>
                                <li>Report Found</li>
                                <li>Report Lost</li>
                                <li>How It Works</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "12px" }}>Legal</h6>
                            <ul className="list-unstyled text-muted">
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Claim Criteria</li>
                                <li>Acceptable Use</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-bold text-dark mb-2" style={{ fontSize: "12px" }}>Campus Help</h6>
                            <ul className="list-unstyled text-muted">
                                <li>Campus Security</li>
                                <li>Student Affairs</li>
                                <li>Designated Safe Zones</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-top mt-3 pt-3 text-muted d-flex justify-content-between align-items-center" style={{ fontSize: "11px" }}>
                        <span>&copy; 2026 CampusFind, Affiliated with University Student Services & Campus Security.</span>
                        <div className="d-flex gap-3">
                            <span><i className="bi bi-facebook"></i></span>
                            <span><i className="bi bi-twitter"></i></span>
                            <span><i className="bi bi-instagram"></i></span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Landing;