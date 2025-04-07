import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBed, FaUserFriends } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import "../styles/RoomDetails.css";

const RoomDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, message } = location.state || {};

  if (!room) {
    return <h2 className="error-message">No room details found!</h2>;
  }

  return (
    <div className="room-details-container">
      <h1 className="room-title">Room {room.room_no} Details</h1>

      {message && <p className="success-message">{message}</p>}

      <div className="room-info-card">
        <div className="room-info">
          <MdMeetingRoom className="room-icon" />
          <span>{room.type} Room</span>
        </div>

        <div className="room-info">
          <FaBed className="room-icon" />
          <span>{room.floor}</span>
        </div>

        <div className="room-info">
          <FaUserFriends className="room-icon" />
          <span>Capacity: {room.capacity}</span>
        </div>

        <div className={`room-status status-${room.status}`}>
          {room.status === "Booked" ? "● Booked" : "● Available"}
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/rooms")}>
        Go Back to Rooms
      </button>
    </div>
  );
};

export default RoomDetails;
