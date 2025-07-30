// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import Bookmarks from "./pages/Bookmarks";
import Navbar from "./components/Navbar";
import { sampleBlogs } from "./data/sampleBlogs";
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState(sampleBlogs);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route
          path="/create"
          element={<CreateBlog setBlogs={setBlogs} blogs={blogs} />}
        />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        <Route
          path="/edit/:id"
          element={<EditBlog blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}
// <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />

export default App;
