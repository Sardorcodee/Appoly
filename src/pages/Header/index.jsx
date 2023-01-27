import "./index.scss";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const port = useLocation().pathname;
  
  return (
    <>
      <nav className="container m-auto d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-5">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-envelope me-md-1 me-lg-3"></i>
              sindarovsardor@gmail.com
            </a>
            <a href="#" className="nav-link">
              <i className="fa-solid fa-phone me-md-1 me-lg-3 "></i>
              +998 (93) 6060509
            </a>
          </div>
          <div className="d-flex justify-content-end gap-md-3 gap-lg-4">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="container bg-white d-flex align-items-center justify-content-between mt-2 ps-lg-5 p-1 ">
          <button
            class="bars d-block d-lg-none"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul className="dropdown-menu">
            <button className="close">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <Link to="/Home" className="nav-link">
              Home
            </Link>
            <a href="/#About" className="nav-link">
              About
            </a>
            <a href="/#Features" className="nav-link">
              Features
            </a>
            <Link to="/Blog" className="nav-link">
              Blog
            </Link>
          </ul>
          <div className="d-flex  gap-5 ms-5 d-none d-lg-flex">
            <Link to="/" className="nav-link">
              Home {port === "" && "p"}
            </Link>
            <a href="/#About" className="nav-link">
              About
            </a>
            <a href="/#Features" className="nav-link">
              Features
            </a>
          </div>
          <div className="d-flex gap-5 align-items-center position-relative">
            <div className="div-logo position-absolute">
              <img src="/public/img/Logo4.png" alt="Logo" />
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="d-flex gap-5 align-items-center d-none d-lg-flex">
              <a href="" className="nav-link">
                Screenshot
              </a>
              <Link to="/Blog" className="nav-link">
                Blog
              </Link>
            </div>
            <button className="btn px-4 py-2">Dowload</button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Header;
