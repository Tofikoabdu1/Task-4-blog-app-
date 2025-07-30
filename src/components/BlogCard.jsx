// import React from "react";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// const BlogCard = ({ data }) => {
//   return (
//     <Card className="w-[16rem] h-auto my-4 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
//       <div className="h-[100px] overflow-hidden">
//         <img
//           src={data.image}
//           alt={data.title}
//           className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
//         />
//       </div>

//       <CardContent className="px-3 py-2 transition-all duration-300">
//         <h2 className="text-md font-semibold text-gray-800 truncate">
//           {data.title}
//         </h2>
//         <p className="text-xs text-gray-500 line-clamp-2">{data.description}</p>
//       </CardContent>

//       <CardFooter className="px-3  text-[0.65rem] text-gray-500 flex justify-between">
//         <span>{data.author}</span>
//         <button className="text-blue-600 hover:underline">Read</button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default BlogCard;
import { Link, useParams } from "react-router-dom";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import profile from "../assets/profile.jpeg"; // Assuming you have a default profile image
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="no-underline text-inherit">
      <Card className="p-5 w-[16rem] h-auto my-4 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="h-[100px] overflow-hidden rounded-xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
          />
        </div>

        <CardContent className="px-3 py-2 transition-all duration-300">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {blog.title}
          </h2>
          <p className="text-xs text-gray-700 line-clamp-2">
            {blog.description}
          </p>
        </CardContent>

        <CardFooter className="px-3 text-[0.65rem] text-gray-500 flex justify-between">
          <div className="">
            <img
              src={blog.authorImage || profile} // Use default profile image if authorImage is not provided
              alt={blog.author}
              className="w-6 h-6 rounded-full inline-block mr-1"
            />
            <span>{blog.author}</span>
          </div>

          <span>{formatDate(blog.createdAt)}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
