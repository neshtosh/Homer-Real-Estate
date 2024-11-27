import owner1Logo from '../ownerLogos/ownerlogo.png';
import owner2Logo from '../ownerLogos/ownerlogo2.png';
import propertyImage1 from '../propertyImages/fancyhse1.jpeg';
import propertyImage2 from '../propertyImages/fancyhse2.jpeg';
import propertyImage3 from '../propertyImages/fancyhse3.jpeg';
import propertyImage4 from '../propertyImages/fancyhse4.jpeg';
import propertyImage5 from '../propertyImages/fancyhse5.jpeg';

export const properties = [
    {
        id: '1',
        name: 'fancy house',
        description: 'This is a fancy house',
        location: 'Uptown,square',
        price: 10000,
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5],
        bedrooms: '5',
        bathrooms: '3',
        area: '2000',
        ownerLogo: owner1Logo,

    },
];

export const generateProperties = (count) => {
    const template = {
        name: 'Sample House',
        description: 'This is a sample house',
        location: 'Sample Location',
        price:  '10000',
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5],
        bedrooms: 5,
        bathrooms: 3,
        area: 2000,
        ownerLogo: owner2Logo,
    };
    
    return Array.from({ length: count }, (_, i) => ({
        ...template,
         id: `${i + 2}`,
        name: `${template.name} ${i + 1}`,
    }));
};

export const sampleHseRentProperties = [...properties, ...generateProperties(100)];