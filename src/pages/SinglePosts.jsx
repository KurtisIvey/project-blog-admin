import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import dateTimeFullConvert from "../utilities/dateTimeFullConvert";
const SinglePosts = () => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      document.title = `Blog | ${post.title}`;
    } else {
      document.title = "Blog | Post";
    }
  }, [post]);

  async function fetchPost() {
    const response = await fetch(
      `https://project-blog-api.herokuapp.com/api/posts/${id}`
    );
    const postRes = await response.json();
    setPost(postRes.post);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  async function deletePost(event) {
    event.preventDefault();
    //console.log(title, textContent);

    const response = await fetch(
      `https://project-blog-api.herokuapp.com/api/posts/${id}`,
      {
        method: "Delete",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },
      }
    );

    if (response.status !== 202) {
      alert("Unauthorized action. Login as Admin to perform this action.");
      return;
    } else {
      navigate("/");
    }
  }

  return (
    <main className=" h-screen overflow-scroll">
      <Navbar />
      {post && (
        <div className="container flex flex-col mx-auto p-5 md:p-4">
          <div className="min-h-[400px]  mt-5">
            <span className="flex">
              <h2 className="text-xl md:text-2xl">{post.title}</h2>
              {localStorage.token && (
                <span>
                  <button
                    onClick={(event) => deletePost(event)}
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-1 text-xs rounded ml-5"
                  >
                    Delete Post
                  </button>
                  <Link to={`/posts/${id}/edit`}>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-1 text-xs rounded ml-5">
                      Edit
                    </button>
                  </Link>
                </span>
              )}
            </span>

            <div className=" mt-1 flex text-center items-end">
              <div className="text-base">By {post.author.username}</div>
              <div
                className="ml-10 text-sm  text-gray-500"
                onClick={() => console.log(post.timestamp)}
              >
                {dateTimeFullConvert(post.timestamp)}
              </div>
            </div>
            <p className="text-sm md:text-base mt-10  mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
              {post.textContent}
            </p>
          </div>
          <div className="container mx-auto border-t-8 flex flex-col md:pr-20 md:pl-20">
            <div className="mt-3">Comments</div>

            <Comments />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default SinglePosts;
