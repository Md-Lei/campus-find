import loginLogo from "../assets/loginLogo.png";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white py-4">
            <div className="container shadow-lg p-4 rounded bg-white" style={{ maxWidth: "600px" }}>

                {/* HEADER 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px", justifyContent: "flex-start" }}>
                    <img
                        src={loginLogo}
                        alt="Campus Lost and Found Logo"
                        style={{ height: "28px", width: "auto" }}
                    />
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1B2A4A" }}>CampusFind</div>
                </div>

                {/* HEADER 2 */}
                <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#1B2A4A", marginBottom: "5px" }}>Create your account</h1>

                {/* Subheader */}
                <p className="text-muted mb-4" style={{ fontSize: "13px" }}>Join the verified campus network to report, track, and claim lost properties.</p>

                {/* First Name & Last Name */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>First Name</label>
                        <input type="text" className="form-control" placeholder="e.g. Shaunak" style={{ fontSize: "13px" }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Last Name</label>
                        <input type="text" className="form-control" placeholder="e.g. Patel" style={{ fontSize: "13px" }} />
                    </div>
                </div>

                {/* Student ID & School Email Address */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Student/Employee ID</label>
                        <input type="text" className="form-control" placeholder="e.g. 901248" style={{ fontSize: "13px" }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>School Email Address</label>
                        <input type="email" className="form-control" placeholder="e.g. spatel@university.edu" style={{ fontSize: "13px" }} />
                    </div>
                </div>

                {/* Department / Faculty & Course / Program */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Department / Faculty</label>
                        <select className="form-select text-muted" defaultValue="" style={{ fontSize: "13px" }}>
                            <option value="" disabled>Select Department</option>
                            <option value="cs">Computer Science</option>
                            <option value="engineering">Engineering</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Course / Program</label>
                        <input type="text" className="form-control" placeholder="e.g. B.S. Computer Science" style={{ fontSize: "13px" }} />
                    </div>
                </div>

                {/*Year Level / Status & Contact Number */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Year Level / Status</label>
                        <input type="text" className="form-control" placeholder="e.g. 3rd Year" style={{ fontSize: "13px" }} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Contact Number (Optional)</label>
                        <input type="text" className="form-control" placeholder="e.g. +1 555-0192" style={{ fontSize: "13px" }} />
                    </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="row mb-2">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Password</label>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="Minimum 8 characters" style={{ fontSize: "13px" }} />
                            {/* <span className="input-group-text bg-white text-muted" style={{ cursor: "pointer" }}>
                                <i className="bi bi-eye"></i>
                            </span> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" style={{ fontSize: "12px", fontWeight: "bold", color: "#1B2A4A" }}>Confirm Password</label>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="Repeat password" style={{ fontSize: "13px" }} />
                            {/* <span className="input-group-text bg-white text-muted" style={{ cursor: "pointer" }}>
                                <i className="bi bi-eye"></i>
                            </span> */}
                        </div>
                    </div>
                </div>

                {/* Password Strength Indicator Bars */}
                <div className="mb-3">
                    <div className="d-flex justify-content-between text-muted mb-1" style={{ fontSize: "11px" }}>
                        <span>Password Strength: <strong className="text-success">Strong</strong></span>
                        <span className="text-success fw-semibold">100% Secure</span>
                    </div>
                    <div className="d-flex gap-1">
                        <div className="flex-grow-1 rounded bg-success" style={{ height: "4px" }}></div>
                        <div className="flex-grow-1 rounded bg-success" style={{ height: "4px" }}></div>
                        <div className="flex-grow-1 rounded bg-success" style={{ height: "4px" }}></div>
                        <div className="flex-grow-1 rounded bg-success" style={{ height: "4px" }}></div>
                    </div>
                </div>

                {/* Profile Picture Upload Box */}
                <div className="p-3 mb-3 rounded border bg-light d-flex align-items-center gap-3">
                    <div className="bg-white p-2 rounded-circle shadow-sm d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                        <i className="bi bi-camera text-muted fs-5"></i>
                    </div>
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: "bold", color: "#1B2A4A" }}>Profile Picture (Optional)</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}>JPG, PNG up to 5MB. Helps verify returns.</div>
                    </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="form-check mb-4" style={{ fontSize: "12px" }}>
                    <input className="form-check-input" type="checkbox" id="termsCheck" />
                    <label className="form-check-label text-muted" htmlFor="termsCheck">
                        I agree to the <Link to="/terms" className="text-primary fw-semibold" style={{ textDecoration: "none" }}>CampusFind Terms of Use</Link> and authorize Student Affairs to verify my university status.
                    </label>
                </div>

                {/* Create Account Button & Sign In Link */}
                <div>
                    <button type="button" className="btn w-100 mb-3 text-white fw-semibold" style={{
                        backgroundColor: "#1B2A4A",
                        fontSize: "14px",
                        padding: "10px"
                    }}>Create Account</button>

                    <p className="text-center text-muted mb-0" style={{ fontSize: "13px" }}>
                        Already have an account? <Link to="/login" className="fw-semibold text-primary" style={{ textDecoration: "none" }}>Sign in here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;