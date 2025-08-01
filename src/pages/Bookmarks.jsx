import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtom";
import BookMarkedBlog from "@/components/BookMarkedBlog";
import Footer from "@/components/Footer";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        📌 Your Bookmarked Posts
      </h2>
      <div className="space-y-6">
        {bookmarks.length === 0 ? (
          <p className="text-gray-500">No bookmarks yet.</p>
        ) : (
          bookmarks.map((post) => (
            <BookMarkedBlog
              post={post}
              key={post.id}
              onRemove={() => removeBookmark(post.id)}
            />
          ))
        )}
      </div>
      {bookmarks.length > 0 && <Footer />}
    </div>
  );
};
export default Bookmarks;
