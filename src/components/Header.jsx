import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Header = () => {
  const { handleShowLoginModal } = useContext(LoginContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-3 px-20"
        style={{ backgroundColor: "rgb(234 237 255)" }}
        data-bs-theme="light"
      >
        <div className="container-fluid container">
          <a className="navbar-brand fw-bold fs-2" href="/">
            Worko.ai
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold fs-5 px-2"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold fs-5 px-2"
                  href="#"
                >
                  FOQ's
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fw-semibold fs-5 px-2"
                  href="#"
                >
                  Corporate
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
              <Link to="/login/" className="nav-item">
                <button
                  className="btn btn-primary mx-2"
                  type="submit"
                  variant="primary"
                  onClick={handleShowLoginModal}
                >
                  LogIn
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
