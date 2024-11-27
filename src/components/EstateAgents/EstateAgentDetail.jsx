import React from 'react';
import { useParams } from 'react-router-dom';
import './EstateAgentDetail.css';
import ReviewSection from '../ReviewSection/ReviewSection';

// Replace with dynamic data or API call
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

const EstateAgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) {
    return <p>Agent not found!</p>;
  }

  return (
    <div className="agent-detail-page">
      <img src={agent.profilePhoto} alt={agent.name} className="detail-photo" />
      <h1>{agent.name}</h1>
      <p>{agent.bio}</p>
      <div className="detail-specialization">
        {agent.specialization.map((spec, index) => (
          <span key={index} className="specialization-badge">
            {spec}
          </span>
        ))}
      </div>
      <p>Location: {agent.location}</p>
      <p>Agency: {agent.agency}</p>
      <p>Contact: {agent.contact}</p>
      <div className="agent-listings">
        <h2>Listings</h2>
        <ul>
          {agent.listings.map((listing, index) => (
            <li key={index}>{listing}</li>
          ))}
        </ul>
      </div>
      <ReviewSection />
    </div>
  );
};

export default EstateAgentDetail;
