import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { bookmarksAtom } from "../atoms/bookmarkAtom";
import BookMarkedBlog from "@/components/BookMarkedBlog";

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
            // <div
            //   key={post.id}
            //   className="m-7 border-2 border-gray-400 p-4 rounded"
            // >
            //   <h3>{post.title}</h3>
            //   <Button
            //     onClick={() => removeBookmark(post.id)}
            //     className="text-red-500 underline"
            //   >
            //     Remove
            //   </Button>
            // </div>
            <BookMarkedBlog
              post={post}
              key={post.id}
              onRemove={() => removeBookmark(post.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Bookmarks;
