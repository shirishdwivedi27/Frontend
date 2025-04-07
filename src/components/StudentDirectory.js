import React, { useState } from 'react';
import { FaSearch, FaUserGraduate, FaPhone, FaEnvelope, FaHome, FaBed, FaEdit, FaTrash, FaFilter } from 'react-icons/fa';
import '../styles/StudentDirectory.css';

function StudentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterView, setFilterView] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const students = [
    {
      id: 1,
      name: "Ram Gupta",
      rollNo: "2023001",
      roomNo: "101",
      course: "Computer Science",
      year: "2nd Year",
      contact: "+1234567890",
      email: "ram@example.com",
      address: "123 College Street",
      status: "active",
      fees: "paid",
      photo: "https://example.com/photo1.jpg"
    },
      {
        id: 1,
        name: "Soumya Mishra",
        rollNo: "2343007",
        roomNo: "102",
        course: "Computer Science",
        year: "2nd Year",
        contact: "+1234566548",
        email: "soumya@example.com",
        address: "123 College Street",
        status: "unactive",
        fees: "paid",
        photo: "https://example.com/photo1.jpg"
      },// Add more student data
  ];

  const filteredStudents = students
    .filter(student => {
      const matchesSearch = Object.values(student)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const matchesFilter = filterView === 'all' 
        ? true 
        : student.status === filterView;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className="student-directory-container">
      <div className="directory-header">
        <h1 className="directory-title">Student Directory</h1>
      </div>

      <div className="search-filter-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-sort-options">
          <select 
            className="filter-select"
            value={filterView}
            onChange={(e) => setFilterView(e.target.value)}
          >
            <option value="all">All Students</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="rollNo">Sort by Roll No</option>
            <option value="roomNo">Sort by Room No</option>
          </select>
        </div>
      </div>

      <div className="students-grid">
        {filteredStudents.map(student => (
          <div key={student.id} className="student-card">
            <div className="student-photo">
              <img src={student.photo} alt={student.name} />
              <div className={`status-indicator ${student.status}`} />
            </div>

            <div className="student-details">
              <h2 className="student-name">{student.name}</h2>
              <p className="student-roll">Roll No: {student.rollNo}</p>
              
              <div className="info-grid">
                <div className="info-item">
                  <FaBed className="info-icon" />
                  <span>Room {student.roomNo}</span>
                </div>
                <div className="info-item">
                  <FaUserGraduate className="info-icon" />
                  <span>{student.course}</span>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <span>{student.contact}</span>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span>{student.email}</span>
                </div>
                <div className="info-item">
                  <FaHome className="info-icon" />
                  <span>{student.address}</span>
                </div>
              </div>

              <div className="fees-status">
                Fees Status: 
                <span className={`fees-badge ${student.fees}`}>
                  {student.fees.toUpperCase()}
                </span>
              </div>

              <div className="student-actions">
                <button className="action-btn edit">
                  <FaEdit /> Edit
                </button>
                <button className="action-btn delete">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDirectory;