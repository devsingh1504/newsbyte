import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general"); // Default category
  const [country, setCountry] = useState("us"); // Default country
  const [loading, setLoading] = useState(false); // New state to manage loading

  // Fetching data from API based on category and country
  const fetchData = async (category, country) => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b3032716581240f59c543cf446622263`
      );
      setArticles(response.data.articles);
      setLoading(false); // Set loading to false after fetching is complete
    } catch (error) {
      console.log("Error fetching API data:", error);
      setLoading(false); // Set loading to false even in case of error
    }
  };

  useEffect(() => {
    fetchData(category, country); // Fetch news when component loads or when category/country changes
  }, [category, country]);

  // Categories and Countries to display
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
    // Add more countries from the list you shared
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* Country Dropdown */}
      <div className="flex justify-center mb-3">
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

      {/* Category Tabs */}
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

      {/* Loading Spinner or Message */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="text-lg font-bold">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
          {articles
            .filter((article) => article.urlToImage) // Filter out articles without an image
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
