import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui is set up
import Logo from "../assets/Logo.png"; // Adjust the path as necessary
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-transparent">
      {/* <img src={Logo} alt="Logo" className="h-15" /> */}
      <h1 className="text-3xl">Blog</h1>
      <div className="space-x-4">
        <Button
          asChild
          className="border-none text-black border-gray-500 bg-transparent hover:text-blue-500"
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          asChild
          className="border-none text-black border-gray-500 bg-transparent hover:text-blue-500"
        >
          <Link to="/create">Create</Link>
        </Button>
        <Button
          asChild
          className="border-none text-black border-gray-500 bg-transparent hover:text-blue-500"
        >
          <Link to="/bookmarks">Saved</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
