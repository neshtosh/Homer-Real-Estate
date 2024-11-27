import owner1Logo from '../ownerLogos/ownerLogo.png';
import owner2Logo from '../ownerLogos/ownerlogo2.png';
import propertyImage1 from '../propertyImages/fancyapartment1.jpeg';
import propertyImage2 from '../propertyImages/fancyapartment2.jpeg';
import propertyImage3 from '../propertyImages/fancyapartment3.jpeg';
import propertyImage4 from '../propertyImages/fancyapartment4.jpeg';
import propertyImage5 from '../propertyImages/fancyapartment5.jpeg';

export const properties = [
    {
        id: '1',
        name: 'Fancy Apartment',
        description: 'This is a fancy apartment',
        location: 'Downtown, Corner',
        price: '1000',
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5],
        bedrooms: 2,
        bathrooms: 2,
        area: 80,
        ownerLogo: owner1Logo,
    },
];

export const generateProperties = (count) => {
    const template ={
        name: 'Sample Apartment',
        description: 'This is a sample apartment',
        location: 'Sample Location',
        price: '500',
        images: [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5],
        bedrooms: 3,
        bathrooms: 2,
        area: 100,
        ownerLogo: owner2Logo,
    };


    return Array.from({ length: count }, (_, i) => ({
        ...template,
         id: `${i + 2}`,
        name: `${template.name} ${i + 1}`,
    }));
};

export const sampleRentProperties =[...properties, ...generateProperties(100)];