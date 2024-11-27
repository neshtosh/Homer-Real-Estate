import React, { useState } from 'react';
import './EstateAgents.css';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    location: '',
    agency: '',
    specialization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters-container">
      <h3>Filter Agents</h3>
      <div className="filter-item">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">All Locations</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="agency">Agency</label>
        <select
          id="agency"
          name="agency"
          value={filters.agency}
          onChange={handleChange}
        >
          <option value="">All Agencies</option>
          <option value="Urban Realty">Urban Realty</option>
          <option value="Coastal Properties">Coastal Properties</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="specialization">Specialization</label>
        <select
          id="specialization"
          name="specialization"
          value={filters.specialization}
          onChange={handleChange}
        >
          <option value="">All Specializations</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
