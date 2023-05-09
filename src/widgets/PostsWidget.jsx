import PostWidget from "./PostWidget";

const PostsWidget = () => {
  // Temporary
  const posts = [
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante ut augue bibendum sagittis. Proin euismod nisl ut mauris lacinia dapibus.",
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
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer faucibus semper elit eu tincidunt.",
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
        "Etiam non lorem non enim tincidunt tempus. Fusce malesuada urna nec nunc faucibus, ac cursus metus fermentum.",
      imagePaths: ["image3.jpg"],
    },
  ];

  return (
    <div>
      <PostWidget post={posts[0]} />
      <PostWidget post={posts[1]} />
      <PostWidget post={posts[2]} />
    </div>
  );
};

export default PostsWidget;
