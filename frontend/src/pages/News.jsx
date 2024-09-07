import React, { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b3032716581240f59c543cf446622263`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news: ", error);
      }
    };

    fetchNews();
  }, [category, country]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-200 p-2 rounded mr-2"
        >
          <option value="general">General</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
        </select>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="bg-gray-200 p-2 rounded"
        >
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="gb">United Kingdom</option>
          <option value="au">Australia</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            {article.urlToImage ? (
              <img
                className="w-full h-48 object-cover"
                src={article.urlToImage}
                alt="News"
              />
            ) : (
              <img
                className="w-full h-48 object-cover"
                src="./public/default.jpg"
                alt="Default"
              />
            )}
            <h2 className="font-bold text-lg mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-2">{article.author}</p>
            <p className="text-gray-600 text-sm">
              {new Date(article.publishedAt).toLocaleString()}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
