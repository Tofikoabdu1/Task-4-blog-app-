// src/pages/BlogDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtom";
import profile from "../assets/profile.jpeg";
import bookmarkicon from "../assets/bookmarkicon.png";
import deleteicon from "../assets/deleteicon.png";
import editicon from "../assets/editicon.png";

const BlogDetails = ({ blogs }) => {
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
          // add only necessary fields
        },
      ]);
    }
  };

  useEffect(() => {
    if (!blog) {
      alert("Blog not found");
      navigate("/");
    }
  }, [blog, navigate]);

  if (!blog) return null;

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
            className={`cursor-pointer px-4 py-2 rounded ${
              isBookmarked ? "bg-red-500" : ""
            } text-white`}
          >
            {isBookmarked ? (
              "Remove Bookmark"
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

          <img className="w-6 h-6" src={deleteicon} alt="" />
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

      <div className="max-w-3xl mx-auto p-6">
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 underline mb-4"
        >
          ← Back to Home
        </button>
        <h2 className="text-3xl font-bold">{blog.title}</h2>
        <p className="text-sm text-gray-500">
          By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
        <div className="mt-4 whitespace-pre-wrap">{blog.content}</div>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => navigate(`/edit/${blog.id}`)}
            className="px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Edit
          </button>
          <button
            onClick={toggleBookmark}
            className={`px-4 py-2 rounded ${
              isBookmarked ? "bg-red-500" : "bg-blue-600"
            } text-white`}
          >
            {isBookmarked ? "Remove Bookmark" : "Bookmark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
