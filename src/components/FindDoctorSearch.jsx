import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindDoctorSearch = ({ onDoctorSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ✅ Doctor search API call
      const response = await axios.get(`http://localhost:8080/doctors?search=${searchTerm}`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Search error:', error);
      setDoctors([]);
    }
    setLoading(false);
  };

  const handleDoctorSelect = (doctor) => {
    onDoctorSelect(doctor);
  };

  return (
    <div className="doctor-search">
      <h3>Find Doctors</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="search-results">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="doctor-card"
            onClick={() => handleDoctorSelect(doctor)}
          >
            <h4>{doctor.name}</h4>
            <p>Specialty: {doctor.specialty}</p>
            <p>Experience: {doctor.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctorSearch;
