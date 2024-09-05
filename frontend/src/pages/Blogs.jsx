import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  // console.log(blogs);
  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">All Blogs goes here!!!</h1>
        {/* <p className="text-center mb-8">
          The concept of gods varies widely across different cultures,
          religions, and belief systems
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{blog?.title}</h2>
                  <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    {blog?.category}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div>No news available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
