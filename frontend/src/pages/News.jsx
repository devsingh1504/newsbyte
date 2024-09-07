import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New state to manage errors

  const fetchData = async (category, country) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b3032716581240f59c543cf446622263`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.log("Error fetching API data:", error);
      setError("There was an issue fetching the news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(category, country);
  }, [category, country]);

  const categories = [
    "general",
    "technology",
    "health",
    "sports",
    "business",
    "entertainment",
    "science",
  ];

  const countries = [
    { code: "us", name: "United States" },
    { code: "in", name: "India" },
    { code: "gb", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" },
    { code: "fr", name: "France" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="flex justify-center mb-3">
        {/* Uncomment this if you want to use the country dropdown */}
        {/* <select
          className="px-4 py-2 rounded-lg border bg-gray-200 text-gray-700"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select> */}
      </div>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              category === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-300 hover:text-white transition-all duration-200 ease-in-out mb-2`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold">Loading...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold text-red-500">{error}</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
          {articles
            .filter((article) => article.urlToImage)
            .map((article, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg"
                style={{ marginBottom: "2rem" }}
              >
                <img
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                  src={article.urlToImage}
                  alt="News"
                />
                <div className="px-6 py-4 w-full md:w-2/3">
                  <div className="font-bold text-xl mb-2">{article.title}</div>
                  <p className="text-gray-700 text-base">
                    {article.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default News;
