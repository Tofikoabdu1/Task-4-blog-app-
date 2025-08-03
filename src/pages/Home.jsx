import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = ({ blogs }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="p-6 flex flex-col">
      <Hero />
      <h2 className="text-2xl font-bold mb-7">Recent Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">
          No blog posts yet. Create one to get started!
        </p>
      ) : (
        <div className="px-10">
          <div className="flex flex-wrap gap-4">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}

      {visibleCount < blogs.length && (
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={handleShowMore}
            className="inline text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Show More
          </button>
        </div>
      )}

      <Footer className="items-end" />
    </div>
  );
};

export default Home;
