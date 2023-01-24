import React from "react";
import { Link } from "react-router-dom";

const NewPostButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
      <Link className="hover:underline" to="/posts/new-post">
        Create Post +
      </Link>
    </button>
  );
};

export default NewPostButton;
