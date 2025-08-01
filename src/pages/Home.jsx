// src/pages/Home.jsx
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = ({ blogs }) => {
  return (
    <div className=" p-6">
      <Hero />
      <h2 className="text-2xl font-bold mb-7">Recent Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">
          No blog posts yet. Create one to get started!
        </p>
      ) : (
        <div className="px-10">
          <div className="flex flex-wrap gap-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center">
        <Link
          to="/create"
          className="inline text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Create New Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
