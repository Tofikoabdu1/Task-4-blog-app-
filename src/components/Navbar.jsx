import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-transparent">
      <h1 className="text-3xl font-bold" style={{ fontFamily: "K2D" }}>
        Blog
      </h1>
      <div className="space-x-4">
        <Button
          asChild
          className="border-none text-black border-gray-500 bg-transparent hover:bg-black hover:text-white"
        >
          <Link to="/">Home</Link>
        </Button>

        <Button
          asChild
          className="border-none text-black border-gray-500 bg-transparent hover:bg-black hover:text-white"
        >
          <Link to="/bookmarks">Saved</Link>
        </Button>
      </div>
      <div>
        <Button
          asChild
          className="border-none bg-black text-white border-gray-500 hover:bg-gray-700"
        >
          <Link to="/create">post A Blog</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
