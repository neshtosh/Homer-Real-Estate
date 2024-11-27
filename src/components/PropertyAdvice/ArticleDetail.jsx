import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';

// Simulated articles data
const articles = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x400',
    headline: 'Top Tips for First-Time Home Buyers',
    content: 'Detailed article content about first-time home buyers.',
    source: 'https://example.com/home-buying-tips',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/e8/29/fc/e829fc33817153772e129a650a0647f5.jpg',
    headline: 'How to Stage Your Home for a Quick Sale',
    content: 'When I was a bank lender, I saw too many people screw up their mortgage pre-approvals with previous major purchases,  car loans, and empty savings accounts. If you want to get a new home, you have to make sacrifices and trade-offs before you start house-hunting.To begin, you can only make a home purchase if you’ve set aside money for a down payment. The more money you can put down, the smaller your bank loan will have to be Typically, your down payment will be 20% of your purchase price. Certain lenders will allow you to put less down; however, they will likely require you to purchase mortgage insurance, which increases your monthly payments.When you get the urge to buy a home, your first step is to start saving as much as you can',
    source: 'https://example.com/home-staging-tips',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/800x400',
    headline: 'The Benefits of Investing in Real Estate',
    content: 'Detailed article content about real estate investment.',
    source: 'https://example.com/investing-benefits',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/800x400',
    headline: 'Navigating the Rental Market: What to Know',
    content: 'Detailed article content about navigating the rental market.',
    source: 'https://example.com/rental-market-tips',
  },
];

const ArticleDetail = () => {
  const { id } = useParams(); // Get the id from the route parameters
  const article = articles.find((article) => article.id === parseInt(id, 10)); // Find the article by ID

  if (!article) {
    // Handle case where article is not found
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist.</p>
        <Link to="/property-advice">Go Back to Articles</Link>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <img src={article.image} alt={article.headline} className="article-image" />
      <h1>{article.headline}</h1>
      <p className="article-content">{article.content}</p>
      {/* Placeholder for additional images */}
      <div className="additional-images">
        <img src="https://via.placeholder.com/300x200" alt="Additional" />
        <img src="https://via.placeholder.com/300x200" alt="Additional" />
      </div>
      <a href={article.source} target="_blank" rel="noopener noreferrer" className="article-source">
        Read the full article at the source
      </a>
    </div>
  );
};

export default ArticleDetail;
