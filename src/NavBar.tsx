import "./NavBar.css";

import { FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/logo.png" />
        </a>
      </div>

      <div className="navbar-links">
        <a href="https://github.com/mikaelnotfall-dev/Permafrost" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
