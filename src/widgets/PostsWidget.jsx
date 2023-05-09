import { useDispatch, useSelector } from "react-redux";
import PostWidget from "./PostWidget";
import { useEffect } from "react";
import { setPosts } from "../state";

const PostsWidget = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // Temporary
  const tempPosts = [
    {
      _id: "1234",
      userId: "1234",
      type: "offering",
      title: "Example Title 1",
      instrument: "Guitar",
      experience: "4 Years",
      genres: ["Rock", "Blues"],
      availability: "Weekends",
      recordingExperience: "2 Years",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante ut augue bibendum sagittis. Proin euismod nisl ut mauris lacinia dapibus. Pellentesque in tellus metus. Ut at sagittis massa. Nulla imperdiet nisi vel consequat scelerisque. Aliquam vel dapibus enim. Maecenas lobortis urna enim, nec convallis elit hendrerit id.",
      imagePaths: ["image1.jpg"],
    },
    {
      _id: "5678",
      userId: "5678",
      type: "offering",
      title: "Example Title 2",
      instrument: "Piano",
      experience: "2 Years",
      genres: ["Classical", "Jazz"],
      availability: "Weekdays",
      recordingExperience: "1 Year",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer faucibus semper elit eu tincidunt. Vivamus interdum euismod elit vel blandit. Donec facilisis varius odio, vel lobortis orci ultricies at.",
      imagePaths: ["image2.jpg"],
    },
    {
      _id: "9012",
      userId: "9012",
      type: "offering",
      title: "Example Title 3",
      instrument: "Bass",
      experience: "5 Years",
      genres: ["Funk", "R&B"],
      availability: "Weekends",
      recordingExperience: "3 Years",
      description:
        "Etiam non lorem non enim tincidunt tempus. Fusce malesuada urna nec nunc faucibus, ac cursus metus fermentum. Ut id lacus euismod, suscipit tellus quis, fringilla eros.",
      imagePaths: ["image3.jpg"],
    },
    {
      _id: "4567",
      userId: "4567",
      type: "offering",
      title: "Example Title 4",
      instrument: "Drums",
      experience: "8 Years",
      genres: ["Metal", "Punk"],
      availability: "Evenings",
      recordingExperience: "4 Years",
      description:
        "Suspendisse eget libero dignissim, dapibus enim eget, commodo justo. In hac habitasse platea dictumst. Donec euismod lobortis cursus. Praesent non nisi in eros convallis lobortis vel vel orci. Donec faucibus urna a erat blandit, non consectetur purus faucibus.",
      imagePaths: ["image4.jpg"],
    },
    {
      _id: "8901",
      userId: "8901",
      type: "offering",
      title: "Example Title 5",
      instrument: "Vocals",
      experience: "6 Years",
      genres: ["Pop", "R&B"],
      availability: "Weekdays",
      recordingExperience: "2 Years",
      description:
        "Donec sed augue magna. Ut nec lacinia augue. Nullam vitae sapien quis ipsum finibus volutpat eu vel ex.",
      imagePaths: ["image5.jpg"],
    },
  ];

  const getPosts = () => {
    dispatch(setPosts({ posts: tempPosts }));
  };

  useEffect(() => {
    getPosts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PostWidget post={posts[0]} />
      <PostWidget post={posts[1]} />
      <PostWidget post={posts[2]} />
      <PostWidget post={posts[3]} />
      <PostWidget post={posts[4]} />
    </div>
  );
};

export default PostsWidget;
