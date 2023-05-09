import React from "react";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";

const PostWidget = ({ post }) => {
  return (
    <WidgetWrapper sx={{ mx: "2rem", width: "300px", height: "200px" }}>
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
      </Typography>
      <Divider />
      <Typography color="text.secondary">{post.description}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        <Link to={`/profile/${post.userId}`}>Profile</Link>
      </Typography>
    </WidgetWrapper>
  );
};

export default PostWidget;
