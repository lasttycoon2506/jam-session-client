import React from "react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostWidget = ({ post }) => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

  // Text reformatting
  const capitalizeText = (text) => {
    return text.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  };
  post.instrument = capitalizeText(post.instrument);
  post.experience = capitalizeText(post.experience);
  post.availability = capitalizeText(post.availability);
  post.recordingExperience = capitalizeText(post.recordingExperience);

  return post ? (
    <WidgetWrapper>
      <Box
        maxWidth={isMobileScreen ? "19rem" : "32rem"}
        minWidth={isMobileScreen ? null : "32rem"}
        onClick={() => {
          navigate(`/profile/${post.userId}`);
        }}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography variant="h5" component="h2">
          {post.type === "Offering" ? "Musician Offering:" : "Musician Wanted:"}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {post.instrument} player with {post.experience} experience
        </Typography>
        <Divider />
        <Typography color="textSecondary">
          Genres: {post.genres && post.genres.join(", ")}
        </Typography>
        <Typography color="textSecondary">
          Availability: {post.availability}
        </Typography>
        <Typography color="textSecondary">
          Recording Experience: {post.recordingExperience}
        </Typography>
        <Divider />
        <Typography variant="body2" component="p">
          {post.description}
        </Typography>
        {post.imagePath && (
          <img
            width="100%"
            alt="post"
            style={{ marginTop: "1rem" }}
            src={`http://jam-session.onrender.com/assets/${post.imagePath}`}
          />
        )}
      </Box>
    </WidgetWrapper>
  ) : (
    <></>
  );
};

export default PostWidget;
