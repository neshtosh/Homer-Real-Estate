import React, { useState } from 'react';
import './ProfilePage.css';

const UserDetails = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '',
        address: '',
        instagram: '',
        facebook: '',
        whatsapp: '',
        profilePicture: 'https://via.placeholder.com/150', // Default profile picture
    });

    const [isVerified, setIsVerified] = useState(false); // Phone number verification state
    const [verificationCode, setVerificationCode] = useState('');
    const [inputCode, setInputCode] = useState(''); // Code entered by the user

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUser((prevUser) => ({
                    ...prevUser,
                    profilePicture: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const sendVerificationCode = () => {
        if (user.phone) {
            // Mock a verification process
            const generatedCode = '123456'; // Replace with actual code generation logic
            setVerificationCode(generatedCode);
            alert('Verification code sent!');
        } else {
            alert('Please enter a valid phone number.');
        }
    };

    const verifyPhoneNumber = () => {
        if (inputCode === verificationCode) {
            setIsVerified(true);
            alert('Phone number verified!');
        } else {
            alert('Invalid verification code.');
        }
    };

    return (
        <section className="user-details">
            <h2>User Details</h2>
            <div className="profile-picture">
                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="profile-image"
                />
                <label className="upload-button">
                    Upload New Picture
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>
            <div className="editable-fields">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                    />
                    <button onClick={sendVerificationCode}>
                        Send Verification Code
                    </button>
                </label>
                {verificationCode && !isVerified && (
                    <div>
                        <label>
                            Enter Verification Code:
                            <input
                                type="text"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value)}
                                placeholder="Enter code"
                            />
                        </label>
                        <button onClick={verifyPhoneNumber}>Verify</button>
                    </div>
                )}
                {isVerified && <p className="verified">Phone number verified!</p>}
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                    />
                </label>
                <label>
                    Instagram:
                    <input
                        type="url"
                        name="instagram"
                        value={user.instagram}
                        onChange={handleInputChange}
                        placeholder="Enter Instagram profile URL"
                    />
                </label>
                <label>
                    Facebook:
                    <input
                        type="url"
                        name="facebook"
                        value={user.facebook}
                        onChange={handleInputChange}
                        placeholder="Enter Facebook profile URL"
                    />
                </label>
                {isVerified && (
                    <label>
                        WhatsApp:
                        <input
                            type="url"
                            name="whatsapp"
                            value={`https://wa.me/${user.phone}`}
                            readOnly
                        />
                        <p className="info">
                            Share this link: <a href={`https://wa.me/${user.phone}`}>WhatsApp Chat</a>
                        </p>
                    </label>
                )}
            </div>
        </section>
    );
};

export default UserDetails;
