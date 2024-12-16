import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import AllPropertiesHeader from '../AllPropertiesHeader/AllPropertiesHeader';
import { properties } from '../../../mockhserentProperties/mockhserentProperties';

const PROPERTIES_PER_PAGE = 20;

const HseRentProperties = ({ properties }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        setSearchText(text);
        setFilteredProperties(
            properties.filter(property =>
                property.name.toLowerCase().includes(text) ||
                property.location.toLowerCase().includes(text)
            )    
        );
    };

    const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
    const endIndex = startIndex + PROPERTIES_PER_PAGE;
    const currentProperties = filteredProperties.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProperties.length / PROPERTIES_PER_PAGE);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage +1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handlePropertyClick = (property) => {
        
        navigate(`/hserentals/${property.id}`, { state:{ property } });
    };
    


  return (
    <div className="rent-properties">
    <AllPropertiesHeader />
    <div className="search-filter-header">
        <input
         type="search"
         placeholder="Search by name or location..." 
         value={searchText}
         onChange={handleSearch}
         className="search-bar"
        />
    </div>
    <div className="properties-list">
        {currentProperties.map((property) => (
            <div 
                key={property.id} 
                className="property-container"
                onClick={() => handlePropertyClick(property)}
            >
                <div className="image-slider">
                    <img src={property.images[0]} alt={property.name} className="property-image" />
                </div>
                <div className="property-details">
                    <h2>{property.name}</h2>
                    <p>{property.description}</p>
                    <p className="location">{property.location}</p>
                    <div className="property-icons">
                        <span><FontAwesomeIcon icon={faBed} /> {property.bedrooms}</span>
                        <span><FontAwesomeIcon icon={faBath} /> {property.bathrooms}</span>
                        <span><FontAwesomeIcon icon={faRulerCombined} /> {property.area} sq ft</span>
                    </div>
                    <div className="property-footer">
                        <img src={property.ownerLogo} alt="Owner Logo" className="owner-logo" />
                        <span className="property-price">
                         <span className="dollar-sign">$</span>{property.price}
                        </span> 
                    </div>
                </div>    
            </div>        
        ))}            
    </div>
    <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
            &lt; Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next &gt;
        </button>
    </div>
</div>
);    

};

export default HseRentProperties;
