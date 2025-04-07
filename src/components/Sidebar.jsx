import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Book, Users, MessageSquare, LogOut, Settings } from "lucide-react"; // Icons
import "../styles/Sidebar.css";// Import Sidebar CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open state

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}
>
      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar Content */}
      <div className="sidebar-content">
        <h2 className="sidebar-title">Hostel Management</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" className="sidebar-item">
              <Home size={20} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/courses" className="sidebar-item">
              <Book size={20} /> Courses
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="sidebar-item">
              <Users size={20} /> Rooms
            </Link>
          </li>
          <li>
            <Link to="/students" className="sidebar-item">
              <Users size={20} /> Manage Students
            </Link>
          </li>
          <li>
            <Link to="/complaints" className="sidebar-item">
              <MessageSquare size={20} /> Complaints
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="sidebar-item">
              <MessageSquare size={20} /> Feedback
            </Link>
          </li>
          <li>
            <Link to="/logs" className="sidebar-item">
              <Settings size={20} /> User Access Logs
            </Link>
          </li>
          <li className="sidebar-logout">
            <Link to="/logout" className="sidebar-item">
              <LogOut size={20} /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;