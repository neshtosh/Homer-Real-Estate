import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyAdvice.css';

const articles = [
  {
    id: 1,
    image: 'https://i.pinimg.com/474x/8f/bf/0e/8fbf0e859cc30ff791c503375b1931bc.jpg',
    headline: 'Top Tips for First-Time Home Buyers',
    description: 'Learn key strategies to make your first home purchase a success.',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/e8/29/fc/e829fc33817153772e129a650a0647f5.jpg',
    headline: 'How to Stage Your Home for a Quick Sale',
    description: 'Discover the secrets to attract buyers and close deals faster.',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/474x/02/de/3e/02de3e71d61cc5fdc47ccc171ed25683.jpg',
    headline: 'The Benefits of Investing in Real Estate',
    description: 'Understand why real estate is a solid long-term investment.',
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/474x/62/87/b2/6287b2dc2e059f891342de1c8197a8e4.jpg',
    headline: 'Navigating the Rental Market: What to Know',
    description: 'Get tips to secure the perfect rental property for your needs.',
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/474x/7f/83/90/7f839034a78511d80c113619a217e839.jpg',
    headline: 'How to Secure a Mortgage with the Best Rate',
    description: 'Explore how to secure the best mortgage rate with tips on improving your credit score, shopping around for lenders, and understanding interest rates.',
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/474x/6c/42/bc/6c42bca1168aec4f567d6a971ce8700e.jpg',
    headline: 'Understanding Property Tax for Buyers and Sellers',
    description: 'Learn the ins and outs of property tax, including what buyers and sellers need to know about assessment, deductions, and exemptions.',
  },
  {
    id: 7,
    image: 'https://i.pinimg.com/474x/fc/65/b2/fc65b24a712ec7e06d5f631f6db8a7a8.jpg',
    headline: 'The Importance of Location in Real Estate Investment',
    description: 'Understand how location influences the value of real estate investments and why choosing the right location is crucial for long-term success.',
  },
  {
    id: 8,
    image: 'https://i.pinimg.com/474x/de/59/e1/de59e13c933d43cd722350ad08404706.jpg',
    headline: 'How to Market Your Property for Maximum Exposure',
    description: 'Get effective marketing strategies to sell or rent your property faster, including digital tools, social media tips, and staging advice.',
  },
  {
    id: 9,
    image: 'https://i.pinimg.com/736x/42/5f/fc/425ffce078ab1301027582a09f2e4509.jpg',
    headline: 'Top Renovation Projects That Increase Property Value',
    description: 'Explore home renovation ideas that deliver the best return on investment, from kitchen upgrades to exterior improvements.',
  },
  {
    id: 10,
    image: 'https://i.pinimg.com/474x/dc/5d/23/dc5d23c3cd872674260cb37fb014c867.jpg',
    headline: 'Understanding Closing Costs: What Buyers Need to Know',
    description: 'Learn about the various closing costs involved in purchasing a property and how to budget for them to avoid surprises at the closing table.',
  },
  {
    id: 11,
    image: 'https://i.pinimg.com/474x/a0/19/34/a01934cc89bc6a4bfc6c62851e22120e.jpg',
    headline: 'How to Choose the Right Real Estate Agent for You',
    description: 'Get tips on selecting the right real estate agent who can guide you through the buying, selling, or renting process with ease and expertise.',
  },
  {
    id: 12,
    image: 'https://i.pinimg.com/236x/37/ce/03/37ce03bb331ba06fefd4429684eac628.jpg',
    headline: 'Investing in Commercial Real Estate: A Beginner’s Guide',
    description: 'Discover the basics of commercial real estate investment, including types of properties, risks, and the potential for higher returns compared to residential properties.',
  },
  
];

const PropertyAdvice = () => {
  return (
    <div className="property-advice-container">
      {articles.map((article) => (
        <div key={article.id} className="property-card">
          <img className="card-image" src={article.image} alt={article.headline} />
          <div className="card-content">
            <h3 className="card-title">{article.headline}</h3>
            <p className="card-description">{article.description}</p>
            {/* Use Link to navigate to the ArticleDetail page */}
            <Link to={`/property-advice/${article.id}`} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyAdvice;
