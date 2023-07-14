import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../styles/navbar.css"

export default function StaffNavbar() {
  const location = useLocation();
  const { pathname } = location;
  const pathSegments = pathname.split("/");
  const StaffID = pathSegments[3];

  return (
    <nav className="nav">
      <Link to={`/staffportal/landingpage/${StaffID}`} className="site-title">
        <img src="/housingportallogo.png" alt="Logo" />
        <h1 className="site-title">Staff Portal</h1>
      </Link>

      <ul>
        <DropdownLink label="View Tickets" options={["Pending", "Active", "Closed"]} />
        <CustomLink to={`/staffportal/profile/${StaffID}`}>Profile</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

function DropdownLink({ label, options }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const { pathname } = location;
    const pathSegments = pathname.split("/");
    const StaffID = pathSegments[3];
  
    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    const handleOptionClick = () => {
      // Reload the page
      window.location.reload();
    };
  
    const resolvedPaths = options.map((option) => ({
      label: option,
      path: `/staffportal/tickets/${StaffID}/${option.toLowerCase()}`,
    }));
  
    return (
      <li className={`dropdown ${isOpen ? "open" : ""}`}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {label} <span className="arrow">&#9662;</span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu vertical">
            {resolvedPaths.map((resolvedPath) => (
              <li key={resolvedPath.label} onClick={handleOptionClick}>
                <Link to={resolvedPath.path}>{resolvedPath.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
  