import owner1Logo from '../ownerLogos/ownerlogo.png';
import owner2Logo from '../ownerLogos/ownerlogo2.png';
import propertyImage1 from '../propertyImages/fancyapart1.jpeg';
import propertyImage2 from '../propertyImages/fancyapart2.jpeg';
import propertyImage3 from '../propertyImages/fancyapart3.jpeg';
import propertyImage4 from '../propertyImages/fancyapart4.jpeg';
import propertyImage5 from '../propertyImages/fancyapart5.jpeg';
import propertyImage6 from '../propertyImages/fancyapart6.jpeg';
import propertyImage7 from '../propertyImages/fancyapart7.jpeg';
import propertyImage8 from '../propertyImages/fancyapart8.jpeg';

export const properties = [
    {
        id: '1',
        name: 'cool apartment',
        description: 'This is a fancy apartment',
        location: 'Uptown,square',
        price: 100000,
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5, propertyImage6, propertyImage7, propertyImage8],
        bedrooms: '5',
        bathrooms: '3',
        area: '2000',
        ownerLogo: owner1Logo,
    },
];

export const generateProperties = (count) => {
    const template = {
        name: 'Sample apartment',
        description: 'This is a sample apartment',
        location: 'Sample Location',
        price:  '100000',
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5, propertyImage6, propertyImage7, propertyImage8],
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

export const sampleSaleProperties = [...properties, ...generateProperties(100)];
