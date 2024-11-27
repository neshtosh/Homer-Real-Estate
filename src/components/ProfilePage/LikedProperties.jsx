import React from 'react';
import './ProfilePage.css';

const LikedProperties = () => {
    const likedProperties = ['Property A', 'Property B', 'Property C'];

    return (
        <section className="liked-properties">
            <h2>Liked Properties</h2>
            <ul>
                {likedProperties.map((property, index) => (
                    <li key={index}>{property}</li>
                ))}
            </ul>
        </section>
    );
};

export default LikedProperties;
