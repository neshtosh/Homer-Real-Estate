import owner1Logo from '../ownerLogos/ownerlogo.png';
import owner2Logo from '../ownerLogos/ownerlogo2.png';
import propertyImage1 from '../propertyImages/_ (1).jpeg';
import propertyImage2 from '../propertyImages/_ (2).jpeg';
import propertyImage3 from '../propertyImages/_(3).jpeg';

export const properties = [
  {
    id: '1', // Unique ID for the property
    name: 'Luxury Apartment',
    description: 'Beautiful 3-bedroom apartment in an upscale neighborhood.',
    location: 'Downtown, City Center',
    price: '1,500,000',
    images: [propertyImage1, propertyImage2, propertyImage3],
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    ownerLogo: owner1Logo,
  },
  // Add more properties here as needed
];

export const generateProperties = (count) => {
  const template = {
    name: 'Sample Condo',
    description: 'A sample property for testing purposes.',
    location: 'Sample Location, City',
    price: '750,000',
    images: [propertyImage1, propertyImage2, propertyImage3],
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    ownerLogo: owner2Logo,
  };

  // Generate properties with unique IDs
  return Array.from({ length: count }, (_, i) => ({
    ...template,
    id: `${i + 2}`, // Ensure unique IDs (starting from 2)
    name: `${template.name} ${i + 1}`,
  }));
};

export const sampleProperties = [...properties, ...generateProperties(100)];
