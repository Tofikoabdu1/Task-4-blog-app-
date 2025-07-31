// src/pages/BlogDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtom";
import profile from "../assets/profile.jpeg";
import bookmarkicon from "../assets/bookmarkicon.png";
import deleteicon from "../assets/deleteicon.png";
import editicon from "../assets/editicon.png";
import blogbookmark from "../assets/blogbookmark.png";
import Footer from "@/components/Footer";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((item) => item.id === id);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const isBookmarked = bookmarks.some((b) => b.id === blog?.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks((prev) => prev.filter((b) => b.id !== blog.id));
    } else {
      setBookmarks((prev) => [
        ...prev,
        {
          id: blog.id,
          title: blog.title,
          content: blog.content,
          image: blog.image,
          author: blog.author,
          createdAt: blog.createdAt,
          description: blog.description,

          // add only necessary fields
        },
      ]);
    }
  };

  // useEffect(() => {
  //   if (!blog) {
  //     alert("Blog not found");
  //     navigate("/");
  //   }
  // }, [blog, navigate]);

  if (!blog) return null;
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmDelete) {
      setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
      navigate("/");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-4 p-10 pb-0">
          <img
            className="w-8 h-8 rounded-full inline-block mr-1"
            src={profile}
            alt=""
          />
          <div>
            <p className="font-bold">{blog.author}</p>
            <p className="text-gray-500">
              posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={toggleBookmark}
            className={`cursor-pointer px-4 py-2 rounded bg-white`}
          >
            {isBookmarked ? (
              // "Remove Bookmark"
              <img className="w-6 h-6" src={blogbookmark} alt="" />
            ) : (
              <img className="w-6 h-6" src={bookmarkicon} alt="" />
            )}
          </button>

          <button
            onClick={() => navigate(`/edit/${blog.id}`)}
            className="cursor-pointer"
          >
            <img className="w-6 h-6" src={editicon} alt="" />
          </button>
          <button onClick={handleDelete} className="cursor-pointer">
            <img className="w-6 h-6" src={deleteicon} alt="" />
          </button>
          {/* <img className="w-6 h-6" src={deleteicon} alt="" /> */}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 px-10">{blog.title}</h1>
      </div>
      <div className="h-150 overflow-hidden rounded-xl mb-15">
        <img className="w-full h-full object-cover" src={blog.image} alt="" />
      </div>
      <div>
        <h2 className="text-black text-2xl font-bold mb-4">
          {blog.description}
        </h2>
        <p className="text-black text-lg">{blog.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
