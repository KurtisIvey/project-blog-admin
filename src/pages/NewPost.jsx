import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  useEffect(() => {
    document.title = "Blog | New Post";
  }, []);

  async function createPost(event) {
    event.preventDefault();
    //console.log(title, textContent);

    const response = await fetch(
      `https://project-blog-api.herokuapp.com/api/posts/new-post`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },

        body: JSON.stringify({
          textContent,
          title,
        }),
      }
    );

    const data = await response.json();
    console.log(response.status);

    if (response.status !== 201) {
      return;
      //clear form values and convey error
    } else {
      // entering "0" in navigate causes refresh
      navigate("/");
    }
  }

  return (
    <main className=" h-screen  bg-slate-100 overflow-hidden">
      <Navbar />
      <form
        onSubmit={(event) => createPost(event)}
        className="container flex flex-col max-w-4xl mx-auto my-auto w-full h-5/6 items-center justify-center"
      >
        <Input
          name="title"
          label="Title of Post"
          type="text"
          onChange={setTitle}
          value={title}
        />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          name="textContent"
          id="message"
          rows="4"
          className="block p-2.5 md w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          onChange={(e) => setTextContent(e.target.value)}
          value={textContent}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Create Post
        </button>
      </form>

      <Footer />
    </main>
  );
};

export default NewPost;
