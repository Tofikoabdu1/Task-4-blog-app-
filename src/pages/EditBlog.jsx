// src/pages/EditBlog.jsx
import { useParams, useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const EditBlog = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogToEdit = blogs.find((blog) => blog.id === id);

  const handleEdit = (updatedData) => {
    const updatedBlog = {
      ...blogToEdit,
      ...updatedData,
      editedAt: new Date().toISOString(),
    };
    const updatedList = blogs.map((b) => (b.id === id ? updatedBlog : b));
    setBlogs(updatedList);
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>
      <BlogForm onSubmit={handleEdit} initialData={blogToEdit} />
    </div>
  );
};

export default EditBlog;
