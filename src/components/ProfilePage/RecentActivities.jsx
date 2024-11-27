import React from 'react';
import './ProfilePage.css';

const RecentActivities = () => {
    const activities = [
        { name: 'Viewed Property A', image: 'https://via.placeholder.com/150' },
        { name: 'Liked Property B', image: 'https://via.placeholder.com/150' },
        { name: 'Shared Property C', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <section className="recent-activities">
            <h2>Recent Activities</h2>
            <div className="activities-grid">
                {activities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        <img
                            src={activity.image}
                            alt={activity.name}
                            className="activity-image"
                        />
                        <p className="activity-name">{activity.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentActivities;
