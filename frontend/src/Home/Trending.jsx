import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Trending</h1>
      <Carousel responsive={responsive}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 5).map((element) => (
            <div
              key={element._id}
              className="p-4 bg-white border border-gray-400 rounded-lg shadow-md mx-2"
            >
              <Link to={`/blog/${element._id}`}>
                <div className="relative">
                  <img
                    src={element.blogImage.url}
                    alt="blog"
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  {/* <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {element.category}
                  </div> */}
                </div>
                <div className="p-4 bg-gray-50 rounded-b-lg h-auto flex flex-col">
                  <h1 className="text-x font-bold mb-2 line-clamp-3">
                    {element.title}
                  </h1>
                  <div className=" text-red-600 px-2 py-1 rounded-full text-sm">
                    Trending
                  </div>
                  {/* Optional author info */}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center">
            Loading....
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending;
