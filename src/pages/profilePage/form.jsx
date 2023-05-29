import WidgetWrapper from "../../components/WidgetWrapper";
import React from "react";
import {
  Typography,
  Divider,
  useMediaQuery,
  Box,
} from "@mui/material";
import ProfileWidget from "../../widgets/ProfileWidget";
import Newsfeed from "../../widgets/Newsfeed";

const Form = () => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <WidgetWrapper>
      <Box
        maxWidth={isMobileScreen ? "19rem" : "32rem"}
        minWidth={isMobileScreen ? null : "32rem"}
      >
        <ProfileWidget></ProfileWidget>
        <Divider>
        <Typography variant="h5" component="h2">
          Your Posts
        </Typography>
        </Divider>
        <Newsfeed></Newsfeed>
      </Box>
    </WidgetWrapper>
  );
};

export default Form;
