import React from "react";
import { Button } from "./ui/button";
import profile from "../assets/profile.jpeg";
import blogbookmark from "../assets/blogbookmark.png";

const BookMarkedBlog = ({ post, onRemove }) => {
  return (
    <div className="m-7 p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 mb-4 p-10 pb-0">
          <img
            className="w-8 h-8 rounded-full inline-block mr-1"
            src={profile}
            alt=""
          />
          <div>
            <p className="font-bold">{post.author}</p>
            <p className="text-gray-500">
              posted on {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          className="w-8 h-8 rounded-full inline-block mr-1 hover:cursor-pointer"
          onClick={onRemove}
          src={blogbookmark}
          alt=""
        />
      </div>

      <h1 className="text-3xl font-bold my-3">{post.title}</h1>
      <div className="h-90 overflow-hidden rounded-xl mb-15">
        <img className="w-full h-full object-cover" src={post.image} alt="" />
      </div>
      <p className="text-gray-500">{post.description}</p>
    </div>
  );
};

export default BookMarkedBlog;
