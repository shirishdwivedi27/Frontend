import React, { useState, useEffect } from 'react';
import { FaBed, FaUserFriends, FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import axios from 'axios';
import './RoomManagement.css';
import { useNavigate } from "react-router-dom"; 

// Add this new Modal component
const AddRoomModal = ({ isOpen, onClose }) => {
  const [adminData, setAdminData] = useState({
    adminId: '',
    Username: '',
    email: '',
    Password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://flask-api-s.onrender.com/admin/add', adminData);
      onClose();
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Admin Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Admin ID:</label>
            <input
              type="text"
              value={adminData.adminId}
              onChange={(e) => setAdminData({...adminData, adminId: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={adminData.adminName}
              onChange={(e) => setAdminData({...adminData, adminName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={adminData.email}
              onChange={(e) => setAdminData({...adminData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="tel"
              value={adminData.Password}
              onChange={(e) => setAdminData({...adminData, Password: e.target.value})}
              required
            />
          </div>
         
          <button type="submit" className="submit-btn">Add Room</button>
        </form>
      </div>
    </div>
  );
};

function RoomManagement() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState('all');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this state

  const [room_no,setRoomno]=useState("");
  const [message,setMessage]=useState("");

  const room_book = async (room_no, roomDetails) => {
    try {
      const response = await axios.post("https://flask-api-s.onrender.com/rooms/book", { room_no });
      setMessage(response.data.message);
      navigate("/room-details", { state: { room: roomDetails, message: "Room booked successfully!" } });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Booking failed");
    }
  };
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('https://flask-api-s.onrender.com/rooms');
        setRooms(response.data.rooms);
      } catch (error) {
        setErrorMessage('Failed to load rooms. Please try again.');
        console.error('Error fetching rooms:', error);
      }
    };
    console.log(rooms);

    fetchRooms();
  }, []);

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.status === filter);

  return (
    <div className="room-management-container">
      <div className="room-header">
        <h1 className="room-title">Room Management</h1>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Room Filters */}
      <div className="room-filters">
        {['all', 'vacant', 'occupied'].map((status) => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? 'active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Room List */}
      <div className="room-grid">
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <div key={room.room_no} className="room-card">
              <h2 className="room-number">Room {room.room_no}</h2>
         
               <div className="room-info">
                <MdMeetingRoom className="room-icon" />
                <span>Price: {room.price || 'N/A'}</span>
              </div>
               {/* aur details dalni hai backend table me yaha fetch krani h */}
              {/*<div className="room-info">
                <FaBed className="room-icon" />
                <span>Floor: {room.floor || 'N/A'}</span>
              </div>

              <div className="room-info">
                <FaUserFriends className="room-icon" />
                <span>Capacity: {room.capacity || 'N/A'}</span>
              </div> */}

              <div className={`room-status ${room.status}`}>
                {room.status === 'vacant' ? '● Available' : '● Occupied'}
              </div>

              
               {/* occupied wala sahi krna hai */}
              <div className="room-actions">
                 <button onClick={() =>room_book(room.room_no,room)} className="room-btn btn-book">
                 <FaBed /> Book Now
                 </button>

              </div>
            </div>
          ))
        ) : (
          <p className="no-rooms">No rooms available.</p>
        )}
      </div>

      {/* api call krni hai phir authenticate krna hai */}
      <button 
        className="add-room-btn" 
        title="Add New Room"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus />Add Room
      </button>

      <AddRoomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default RoomManagement;