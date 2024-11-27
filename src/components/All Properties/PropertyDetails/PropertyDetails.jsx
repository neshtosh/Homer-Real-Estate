import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetails.css';

function PropertyDetails({ properties }) {
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        countryCode: '+254',
        message: `I'm interested in the property ${property?.name}. Please provide more details.`,
    });
    const [formError, setFormError] = useState('');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const countryCodes = [
        { code: '+254', flag: '🇰🇪' },
        { code: '+1', flag: '🇺🇸' },
        { code: '+44', flag: '🇬🇧' },
        { code: '+91', flag: '🇮🇳' },
        { code: '+61', flag: '🇦🇺' },
    ];

    if (!property) {
        return <div className="error-message">Property not found!</div>;
    }

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + property.images.length) % property.images.length
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, mobileNumber, message } = formData;

        if (!fullName || !mobileNumber || !message) {
            setFormError('All fields are required.');
            return;
        }

        setFormError('');
        alert('Message sent successfully!');
    };

    const handleWhatsAppRedirect = () => {
        const { mobileNumber, countryCode, message } = formData;

        if (!mobileNumber || !message) {
            setFormError('Please fill in all fields before starting a chat.');
            return;
        }

        const whatsappURL = `https://wa.me/${countryCode}${mobileNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappURL, '_blank');
    };

    const shareLink = window.location.href;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareLink);
        alert('Link copied to clipboard!');
    };

    const handleAddComment = () => {
        if (newComment.trim() === '') return;

        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div className="property-details-page">
            {/* Left Column with Slider */}
            <div className="property-details-left">
                <div
                    className={`image-slider ${isFullscreen ? 'fullscreen' : ''}`}
                    onClick={!isFullscreen ? toggleFullscreen : undefined}
                >
                    {isImageLoading && <div className="image-loader">Loading...</div>}
                    <img
                        src={property.images[currentImageIndex]}
                        alt={`${property.name} - ${currentImageIndex + 1}`}
                        className="property-image"
                        onLoad={() => setIsImageLoading(false)}
                    />
                    {!isFullscreen && !isImageLoading && (
                        <>
                            <button className="slider-button prev" onClick={handlePrevImage} aria-label="Previous Image">
                                &lt;
                            </button>
                            <button className="slider-button next" onClick={handleNextImage} aria-label="Next Image">
                                &gt;
                            </button>
                        </>
                    )}
                </div>
                <div className="thumbnail-row">
                    {property.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`thumbnail ${
                                index === currentImageIndex ? 'active-thumbnail' : ''
                            }`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
                {isFullscreen && (
                    <button className="close-fullscreen" onClick={toggleFullscreen} aria-label="Close Fullscreen">
                        Close
                    </button>
                )}
                <h1 className="property-title">{property.name}</h1>
                <p className="property-description">{property.description}</p>
            </div>

            {/* Right Column */}
            <div className="property-details-right">
                <div className="property-info">
                    <p><span>Price:</span> {property.price}</p>
                    <p><span>Location:</span> {property.location || 'Not available'}</p>
                    <p><span>Bedrooms:</span> {property.bedrooms || 'N/A'}</p>
                    <p><span>Bathrooms:</span> {property.bathrooms || 'N/A'}</p>
                    <p><span>Area:</span> {property.area || 'N/A'} sq ft</p>
                </div>

                {/* Contact Card */}
                <div className="contact-card">
                    <h3>Contact the Owner</h3>
                    <div className="owner-info">
                        <img src={property.ownerLogo} alt="Owner Logo" className="owner-logo" />
                        <p>{property.name}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                        <div className="mobile-input">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.flag} {country.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {formError && <p className="form-error">{formError}</p>}
                        <button type="submit" className="send-button">Send Message</button>
                    </form>
                    <button className="whatsapp-button" onClick={handleWhatsAppRedirect}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp Logo"
                            className="whatsapp-logo"
                        />
                        WhatsApp
                    </button>
                </div>

                {/* Share Section */}
                <div className="share-section">
                    <h3>Share this property</h3>
                    <div className="share-icons">
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(shareLink)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-icon whatsapp"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                            />
                        </a>
                        <a
                            href={`https://www.instagram.com/?url=${encodeURIComponent(shareLink)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-icon instagram"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                            />
                        </a>
                        <a
                            href={`https://x.com/share?url=${encodeURIComponent(shareLink)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-icon twitter"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/640px-X_logo_2023.svg.png"
                                alt="X (Twitter)"
                            />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-icon facebook"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                            />
                        </a>
                    </div>
                    <button className="copy-link-button" onClick={handleCopyLink}>
                        Copy Link
                    </button>
                </div>

                {/* Comments Section */}
                <div className="comments-section">
                    <h3>Comments</h3>
                    <div className="comments-list">
                        {comments.length === 0 ? (
                            <p>No comments yet. Be the first to comment!</p>
                        ) : (
                            comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <p>{comment}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <textarea
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows="3"
                    />
                    <button onClick={handleAddComment} className="add-comment-button">Add Comment</button>
                </div>
            </div>
            <div className="property-map-container">
                <h3>Location</h3>
                <div className="map-placeholder">
                    {/* Placeholder for the map. Replace this with a Maps API later */}
                    <img 
                        src="https://www.maptive.com/wp-content/uploads/2021/08/map-multiple-locations-google-maps.jpg"
                        alt="Property Location" 
                        className="map-image" 
                    />
                </div>
            </div>
        </div>
        
    );
}

export default PropertyDetails;
