import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { bookmarksAtom } from "../atoms/bookmarkAtom";
import BookMarkedBlog from "@/components/BookMarkedBlog";
import Footer from "@/components/Footer";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className=" p-6">
      <h2 className="text-3xl font-bold">📌 Your Bookmarked Posts</h2>
      <div className="mt-4 px-30">
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet.</p>
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
      <Footer />
    </div>
  );
};
export default Bookmarks;
