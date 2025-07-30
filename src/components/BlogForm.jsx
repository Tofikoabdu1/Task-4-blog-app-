// src/components/BlogForm.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Optional if you're using shadcn/ui

const BlogForm = ({ initialData = {}, onSubmit, mode = "create" }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setAuthor(initialData.author || "");
      setDescription(initialData.description || "");
      setContent(initialData.content || "");
      setImage(initialData.image || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");

    onSubmit({
      title,
      author,
      description,
      content,
      image,
    });

    setTitle("");
    setAuthor("");
    setDescription("");
    setContent("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded min-h-[120px]"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">
        {mode === "edit" ? "Update" : "Create"} Blog
      </Button>
    </form>
  );
};

export default BlogForm;
