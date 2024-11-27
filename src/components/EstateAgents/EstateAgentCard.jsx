// EstateAgentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './EstateAgentCard.css';

const EstateAgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <img src={agent.profilePhoto} alt={agent.name} className="agent-photo" />
      <h2>{agent.name}</h2>
      <p>{agent.bio}</p>
      <p>Specialization: {agent.specialization.join(', ')}</p>
      <p>Location: {agent.location}</p>
      <p>Agency: {agent.agency}</p>
      <Link to={`/estate-agents/${agent.id}`} className="view-details-link">
        View Details
      </Link>
    </div>
  );
};

export default EstateAgentCard;
