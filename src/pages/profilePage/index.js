import React from "react";
import { Typography, Divider, useMediaQuery, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import WidgetWrapper from "../../components/WidgetWrapper";
import Navbar from "../../widgets/Navbar";
import ProfileWidget from "../../widgets/ProfileWidget";
import Newsfeed from "../../widgets/Newsfeed";

const ProfilePage = () => {
  const params = useParams();
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          maxWidth={isMobileScreen ? "19rem" : "32rem"}
          minWidth={isMobileScreen ? null : "32rem"}
        >
          <ProfileWidget id={params.userId} />
          <WidgetWrapper>
            <Divider>
              <Typography variant="h5" component="h2">
                Your Posts
              </Typography>
            </Divider>
          </WidgetWrapper>
          <Newsfeed></Newsfeed>
        </Box>
      </div>
    </>
  );
};
export default ProfilePage;
