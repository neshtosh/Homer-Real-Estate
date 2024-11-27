import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const type = queryParams.get('type');

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Perform search logic here based on query and type (either "forSale" or "forRent")
    const fetchResults = async () => {
      // Example search logic (replace with actual search from your data source)
      const properties = await fetchProperties(query, type); // Replace with your API or local search logic
      setResults(properties);
    };

    fetchResults();
  }, [query, type]);

  const fetchProperties = async (query, type) => {
    // Replace with real data fetching logic
    // For now, we're just simulating a list of properties
    return [
      { id: 1, name: 'Property 1', location: 'Location 1', price: '$100,000' },
      { id: 2, name: 'Property 2', location: 'Location 2', price: '$150,000' },
      { id: 3, name: 'Property 3', location: 'Location 3', price: '$200,000' },
    ];
  };

  return (
    <div className="search-results">
      <h1>Search Results for: {query}</h1>
      <h3>Type: {type}</h3>
      <div className="results-list">
        {results.length > 0 ? (
          results.map((property) => (
            <div key={property.id} className="result-item">
              <h4>{property.name}</h4>
              <p>{property.location}</p>
              <p>{property.price}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
