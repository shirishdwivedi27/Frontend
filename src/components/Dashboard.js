import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import { FaBars, FaHome, FaBed, FaUsers, FaMoneyBillWave, 
         FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import image from './images.jpg'         
import axios from 'axios';

const Dashboard = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [count,setCount]=useState("");
  const [v_count,setvCount]=useState("");
  const [o_count,setoCount]=useState("");
  const [emessage,setErrorMessage]=useState("");
  useEffect(() => {
    const Roomscount = async () => {
      try {
        const response = await axios.get('https://flask-api-s.onrender.com/getcoroom');
        setCount(response.data.count);
      } catch (error) {
        setErrorMessage('Failed to load rooms. Please try again.');
        console.error('Error fetching rooms:', error);
      }
    };
  
    const Roomscount_avail = async () => {
      try {
        const response = await axios.get('https://flask-api-s.onrender.com/rooms/vacant');
        setvCount(response.data.count);
      } catch (error) {
        setErrorMessage('Failed to load rooms. Please try again.');
        console.error('Error fetching rooms:', error);
      }
    };
  
    const Roomscount_booked = async () => {
      try {
        const response = await axios.get('https://flask-api-s.onrender.com/rooms/booked');
        setoCount(response.data.count);
      } catch (error) {
        setErrorMessage('Failed to load rooms. Please try again.');
        console.error('Error fetching rooms:', error);
      }
    };
    
    Roomscount();
    Roomscount_avail();
    Roomscount_booked();
  }, []); 
      
   
  const menuItems = [
    { path: '/dashboard', icon: <FaHome />, title: 'Dashboard' },
    { path: '/rooms', icon: <FaBed />, title: 'Room Management' },
    { path: '/students', icon: <FaUsers />, title: 'Student Directory' },
    { path: '/payments', icon: <FaMoneyBillWave />, title: 'Payments' },
    { path: '/complain_box', icon: <FaClipboardList />, title: 'Complaints' },
    { path: '/settings', icon: <FaCog />, title: 'Settings' },
  ];

  const stats = [
    { title: 'Total Rooms', value: count },
    { title: 'Occupied Rooms', value: o_count },
    { title: 'Available Rooms', value: v_count },
    { title: 'Monthly Revenue', value: '₹450K' },
  ];

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${!isSidebarOpen ? 'closed' : ''}`}>
        <div className="sidebar-header">
          <h2>{isSidebarOpen ? 'HMS Admin' : 'HMS'}</h2>
          <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
        </div>
        
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              {isSidebarOpen && <span>{item.title}</span>}
            </Link>
          ))}
          <Link to="/" className="menu-item">
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </Link>
        </nav>
      </aside>

      <main className="main-content">
      <header className="header">
  <div className="user-info">
    <img src={image} alt="Admin" className="avatar" />
    <div className="user-details">
      <h3 className="user-name">Welcome, Admin</h3>
      <p className="user-role">Hostel Management Dashboard</p>
    </div>
  </div>
</header>


        <div className="dashboard-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;