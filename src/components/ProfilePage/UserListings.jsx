import React from 'react';
import './ProfilePage.css';

const UserListings = () => {
    const userListings = [
        { id: 1, title: 'Luxury Villa in Beverly Hills', image: 'https://via.placeholder.com/300', price: '$3,500,000' },
        { id: 2, title: 'Cozy Apartment in New York', image: 'https://via.placeholder.com/300', price: '$950,000' },
        { id: 3, title: 'Modern Condo in Miami', image: 'https://via.placeholder.com/300', price: '$1,200,000' },
    ];

    return (
        <section className="user-listings">
            <h2>Your Listings</h2>
            <div className="listings-container">
                {userListings.map((listing) => (
                    <div className="listing-card" key={listing.id}>
                        <img src={listing.image} alt={listing.title} className="listing-image" />
                        <div className="listing-details">
                            <h3 className="listing-title">{listing.title}</h3>
                            <p className="listing-price">{listing.price}</p>
                        </div>
                        <button className="edit-button">Edit</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserListings;
