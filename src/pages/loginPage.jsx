import loginLogo from "../assets/loginLogo.png";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="container shadow-lg p-4 rounded bg-white" style={{ maxWidth: "400px" }}>

                {/* HEADER 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
                    <img
                        src={loginLogo}
                        alt="Campus Lost and Found Logo"
                        style={{ height: "32px", width: "auto" }}
                    />
                    <div style={{ fontSize: "20px", fontWeight: "bold", color: "#1B2A4A" }}>CampusFind</div>
                </div>

                {/* HEADER 2 */}
                <h1 style={{ fontSize: "24px", fontWeight: "bold", display: "flex", justifyContent: "center", color: "#1B2A4A" }}>Welcome Back</h1>

                {/* subheader */}
                <p className="text-muted mb-4" style={{ fontSize: "14px", display: "flex", justifyContent: "center" }}>Sign in to manage and claim your reported items.</p>

                {/* Email */}
                <div className="mb-2">
                    <label htmlFor="formGroupExampleInput" className="form-label" style={{ fontSize: "13px", fontWeight: "bold", color: "#1B2A4A" }}>University Email or Student ID</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="sp9482@university.edu" />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label" style={{ fontSize: "13px", fontWeight: "bold", color: "#1B2A4A" }}>Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="secretpassword" />
                </div>

                {/* Sign In Button & Register */}
                <div className="mt-4" >
                    {/* <button type="button" className="btn w-100 mb-3" style={{
                        backgroundColor: "#1B2A4A",
                        color: "#FFFFFF"
                    }}>Sign In</button> */}
                    <button
                        type="button"
                        className="btn w-100 mb-3"
                        style={{ backgroundColor: "#1B2A4A", color: "#FFFFFF" }}
                        onClick={() => window.location.href = '/student/dashboard'}
                    >
                        Sign In
                    </button>

                    {/* Register */}
                    <p className="text-center text-muted mb-0" style={{ fontSize: "13px", }}>Don't have an account?  <Link to="/register" className="fw-semibold" style={{ textDecoration: "none" }}>Register Here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;