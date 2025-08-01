import { useParams, useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import Footer from "@/components/Footer";

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
    <div className="p-6">
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>
        <BlogForm onSubmit={handleEdit} initialData={blogToEdit} mode="edit" />
      </div>
      <Footer />
    </div>
  );
};

export default EditBlog;
