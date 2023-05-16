import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { useEffect } from "react";
import { setPosts } from "../state";

const Newsfeed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getPosts = async () => {
    fetch("https://jam-session.onrender.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch(setPosts({ posts: data })))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPosts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostWidget key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Newsfeed;
