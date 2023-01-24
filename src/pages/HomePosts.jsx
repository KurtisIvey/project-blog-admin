import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewPostButton from "../components/NewPostButton";
import PostCard from "../components/PostCard";
const HomePosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    document.title = "Blog | Home";
  }, []);

  async function fetchPosts() {
    const response = await fetch(
      "https://project-blog-api.herokuapp.com/api/posts"
    );

    const postsRes = await response.json();
    setPosts(postsRes.posts);
    //console.log(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="h-fill md:h-screen bg-slate-100">
      <Navbar />
      <div className=" flex flex-col items-center">
        {localStorage.token && <NewPostButton />}

        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 p-5">
          {posts &&
            posts.map((post) => (
              <div key={post._id}>
                <PostCard
                  title={post.title}
                  id={post._id}
                  textContent={post.textContent}
                />
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePosts;
