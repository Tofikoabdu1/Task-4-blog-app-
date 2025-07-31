// src/components/BlogForm.jsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      <label className="font-bold">Title</label>
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="font-bold">Image URL</label>
      <input
        className="w-full border p-2 rounded"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label className="font-bold">Author</label>
      <input
        className="w-full border p-2 rounded"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label className="font-bold">Description</label>
      <input
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="font-bold">Content</label>
      <textarea
        className="w-full border p-2 rounded min-h-[120px]"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-between space-x-2">
        <Button type="submit">
          {mode === "edit" ? "Update" : "Create"} Blog
        </Button>
        <Button
          className={"bg-red-500 text-white hover:bg-red-400"}
          type="button"
          onClick={() => window.history.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
