import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { useEffect } from "react";
import { setPosts } from "../state";
import { useParams } from "react-router-dom";

const Newsfeed = () => {
  const dispatch = useDispatch(); // used to store values in state (see below)
  const posts = useSelector((state) => state.posts); // used to track the value of state.posts
  let API_URL = "https://jam-session.onrender.com/posts";

  //Designate url for user/non-user newsfeed
  let { userId } = useParams();
  if (userId !== undefined) API_URL += `/${userId}` 

  // Send a request to the server for the posts and store in state
  const getPosts = async () => {
    fetch(API_URL)
      .then((response) => response.json())                  // 1. parse data
      .then((data) => dispatch(setPosts({ posts: data })))  // 2. store data in state
      .catch((error) => console.error(error));              // 3. error logging
  };

  // Run getPosts on page load
  useEffect(() => {
    getPosts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);       // ^ this just disables an unecessary linting error

  return (
    <div>
      {posts.map((post) => (
        <PostWidget key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Newsfeed;
