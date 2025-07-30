// src/pages/CreateBlog.jsx
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();

  const generateId = () =>
    `${Date.now()}-${Math.floor(Math.random() * 100000)}`;

  const handleCreate = (data) => {
    const newBlog = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
      editedAt: null,
    };
    setBlogs([...blogs, newBlog]);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
      <BlogForm onSubmit={handleCreate} mode="create" initialData={{ blogs }} />
    </div>
  );
};

export default CreateBlog;
