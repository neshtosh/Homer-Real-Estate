import React, { useState } from 'react';
import './CreateListing.css';

function CreateListing() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    type: '', // House or Apartment
    category: '', // For Sale or For Rent
    bedrooms: '',
    bathrooms: '',
    ownerDescription: '',
    images: [], // Array to store multiple images
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: selectedFiles, // Store selected files as an array
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Listing Data:', formData);

    // Example: Create FormData object to handle image files for API submission
    const data = new FormData();
    for (const key in formData) {
      if (key === 'images') {
        formData.images.forEach((image, index) => {
          data.append(`image_${index}`, image);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    // API submission code goes here
    // Example: fetch('API_ENDPOINT', { method: 'POST', body: data });

    // Reset form (optional)
    setFormData({
      title: '',
      description: '',
      price: '',
      location: '',
      type: '',
      category: '',
      bedrooms: '',
      bathrooms: '',
      ownerDescription: '',
      images: [],
      comment: '',
    });
  };

  return (
    <div className="create-listing">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label>Property Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label>Bedrooms:</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bathrooms */}
        <div>
          <label>Bathrooms:</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />
        </div>

        {/* Owner Description */}
        <div>
          <label>Owner/Estate Agent Description:</label>
          <textarea
            name="ownerDescription"
            value={formData.ownerDescription}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label>Images:</label>
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
            accept="image/*"
            multiple // Allow multiple file selection
          />
        </div>

        {/* Comments */}
        <div>
          <label>Comments:</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
}

export default CreateListing;
