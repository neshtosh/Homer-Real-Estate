import React, { useState } from 'react';
import './EstateAgents.css';
import Filters from './Filters';
import TopAgents from './TopAgents';
import EstateAgentCard from './EstateAgentcard';

// Sample agent data
const agents = [
  {
    id: 1,
    name: 'John Doe',
    profilePhoto: 'https://via.placeholder.com/150',
    bio: 'Experienced apartment specialist with a focus on urban living.',
    location: 'Nairobi',
    agency: 'Urban Realty',
    specialization: ['Apartment'],
    contact: 'johndoe@example.com',
    listings: ['Property 1', 'Property 2', 'Property 3'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePhoto: 'https://via.placeholder.com/150',
    bio: 'Expert in luxury houses and family-friendly properties.',
    location: 'Mombasa',
    agency: 'Coastal Properties',
    specialization: ['House'],
    contact: 'janesmith@example.com',
    listings: ['Property A', 'Property B'],
  },
  // Add more agents as needed
];

const EstateAgents = () => {
  const [filteredAgents, setFilteredAgents] = useState(agents);

  const handleFilterChange = (filters) => {
    // Apply filtering logic
    const filtered = agents.filter((agent) => {
      return (
        (filters.location ? agent.location === filters.location : true) &&
        (filters.agency ? agent.agency === filters.agency : true) &&
        (filters.specialization
          ? agent.specialization.includes(filters.specialization)
          : true)
      );
    });
    setFilteredAgents(filtered);
  };

  return (
    <div className="estate-agents-page">
      
      <div className="agents-container">
        <h1 className="page-title">Estate Agents</h1>
        <Filters onFilterChange={handleFilterChange} />
        <TopAgents agents={agents.slice(0, 3)} />
        <div className="agents-list">
          {filteredAgents.map((agent) => (
            <EstateAgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default EstateAgents;
