import React from 'react';
import ProfileHeader from './ProfileHeader';
import UserDetails from './UserDetails';
import RecentActivities from './RecentActivities';
import LikedProperties from './LikedProperties';
import UserListings from './UserListings';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            {/* Header Section */}
            <ProfileHeader />

            {/* User Details Section */}
            <UserDetails />

            {/* Recent Activities */}
           

            {/* User Listings Management */}
            <UserListings />
        </div>
    );
};

export default ProfilePage;
