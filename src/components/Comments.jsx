import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dateTimeFullConvert from "../utilities/dateTimeFullConvert";

const Comments = () => {
  const [comments, setComments] = useState(null);
  let { id } = useParams();

  async function fetchComments() {
    const response = await fetch(
      `https://project-blog-api.herokuapp.com/api/posts/${id}/comments`
    );
    const commentRes = await response.json();
    setComments(commentRes.comments);
    //setComments(co.post);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div
            key={comment._id}
            className="flex flex-col mb-5 shadow-md bg-white rounded p-1"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm md:text-base">
                {comment.author.username}
              </div>
              <div className="text-xs md:text-sm md:mr-2">
                {dateTimeFullConvert(comment.timestamp)}
              </div>
            </div>
            <p className="text-xs md:text-sm mt-3">{comment.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default Comments;
