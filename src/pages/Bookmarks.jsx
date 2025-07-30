import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { bookmarksAtom } from "../atoms/bookmarkAtom";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold">📌 Your Bookmarked Posts</h2>
      <div className="mt-4 flex gap-4 flex-wrap">
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          bookmarks.map((post) => (
            <div
              key={post.id}
              className="m-7 border-2 border-gray-400 p-4 rounded"
            >
              <h3>{post.title}</h3>
              <Button
                onClick={() => removeBookmark(post.id)}
                className="text-red-500 underline"
              >
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Bookmarks;
