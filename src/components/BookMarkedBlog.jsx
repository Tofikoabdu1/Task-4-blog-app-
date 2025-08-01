import React from "react";
import profile from "../assets/profile.jpeg";
import blogbookmark from "../assets/blogbookmark.png";

const BookMarkedBlog = ({ post, onRemove }) => {
  return (
    <div className="m-4 p-4 rounded-lg bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 sm:w-8 sm:h-8 rounded-full"
            src={profile}
            alt="Author profile"
          />
          <div>
            <p className="font-semibold text-base sm:text-sm">{post.author}</p>
            <p className="text-gray-500 text-sm">
              Posted on {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          className="w-8 h-8 hover:cursor-pointer"
          onClick={onRemove}
          src={blogbookmark}
          alt="Remove bookmark"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold my-2">{post.title}</h1>
      <div className="w-full h-60 sm:h-80 overflow-hidden rounded-xl mb-4">
        <img
          className="w-full h-full object-cover"
          src={post.image}
          alt="Blog visual"
        />
      </div>
      <p className="text-gray-600 text-sm sm:text-base">{post.description}</p>
    </div>
  );
};

export default BookMarkedBlog;
