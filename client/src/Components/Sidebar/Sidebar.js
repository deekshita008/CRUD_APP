import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        Main Menu
        {/* <div className="sidebar-brand">Main Menu</div> */}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={"/register"}>Check Schedule</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
