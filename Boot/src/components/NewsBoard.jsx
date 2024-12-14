import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data); // Log to check if the API response is correct
        setArticles(data.articles || []);  // Set articles or empty array if undefined
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2 className='text-center'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>
      <div style={{ display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gridAutoFlow: 'dense',
    gridTemplateRows: 'masonry' }}>

      {articles.length > 0 ? (
          articles.map((news) => (
              <NewsItem
              key={news.url} // Use the unique news URL as the key
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              />
            ))
        ) : (
            <p>Loading news...</p>  // Optional: Show loading state
        )}
        </div>
    </div>
  );
}

export default NewsBoard;
