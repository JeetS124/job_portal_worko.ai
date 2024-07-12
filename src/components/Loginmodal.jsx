import React, { useState, useContext } from "react";
import modalImg from "../assets/login.jpg";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
    handleClose();
  };
  const { showLoginModal, handleCloseLoginModal } = useContext(LoginContext);

  return (
    <div
      className={`modal fade ${showLoginModal ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ display: showLoginModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content shadow-lg p-5"
          style={{
            backgroundImage: `url('${modalImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="d-flex justify-content-end p-2">
            <Link to="/">
              <button type="button" className="btn-close bg-white"></button>
            </Link>
          </div>
          <div className="modal-body d-flex pb-5">
            <div className="col-lg-4 mx-auto py-4 opacity-50 text-white">
              <h1 className="">Worko.ai</h1>
              <div className="small">Welcome back!</div>
              <p className="small">
                A platform to connect job seekers with employers, offering a
                seamless experience.
              </p>
            </div>
            <form className="col-lg-4 mx-auto">
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="small form-label text-white opacity-50"
                >
                  Username
                </label>
                <input
                  type="email"
                  className="form-control rounded-5"
                  id="email"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="small form-label text-white opacity-50"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-5"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div className="d-flex align-items-center text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary px-5 rounded-5"
                  onClick={handleLogin}
                >
                  LogIn
                </button>
                <a href="" className="small px-2">
                  Forget password
                </a>
              </div>
              <div className="small text-white py-2">
                Don't have any account?
                <a href="" className="small opacity-100 text-primary px-1">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
