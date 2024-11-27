import React from 'react';
import './EstateAgents.css';

const TopAgents = ({ agents }) => {
  return (
    <div className="top-agents-section">
      <h2>Top Agents</h2>
      <div className="top-agents-container">
        {agents.map((agent) => (
          <div key={agent.id} className="top-agent-card">
            <img
              src={agent.profilePhoto}
              alt={agent.name}
              className="top-agent-photo"
            />
            <h3>{agent.name}</h3>
            <p>{agent.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAgents;
