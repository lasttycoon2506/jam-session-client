import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WidgetWrapper from "../components/WidgetWrapper";
import { setProfile } from "../state";
import { useEffect } from "react";

const ProfileWidget = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token);
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  let isOwnProfile = false;

  // Designate wheter this is own profile or others
  if (currentUser._id === id) isOwnProfile = true;

  const getProfile = async () => {
    fetch(`https://jam-session.onrender.com/users/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setProfile({ profile: data }));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProfile(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAllInstruments = () => {
    return (
      <div>
        <Typography variant="h4" mt={4}>
          Instruments
        </Typography>
        {profile.instruments &&
          profile.instruments.length >= 1 &&
          profile.instruments.map((instrument) => {
            return (
              <>
                <Typography variant="h6" mt={2}>
                  {instrument.instrumentName}
                </Typography>
                <Divider></Divider>
                <Typography color="textSecondary">
                  Experience: {instrument.yearsExperience}
                </Typography>
                <Typography color="textSecondary">
                  Skill Level: {instrument.proficiency}
                </Typography>
              </>
            );
          })}
      </div>
    );
  };

  return (
    profile && (
      <WidgetWrapper>
        <Typography
          variant="h3"
          component="h2"
          maxWidth={isMobileScreen ? "19rem" : "32rem"}
          minWidth={isMobileScreen ? null : "32rem"}
        >
          {profile.name}
        </Typography>
        <Grid mb={2}>
          {isOwnProfile && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              onClick={() => navigate("/profile/edit")} //TODO: replace with edit route when merged.
            >
              Edit
            </Button>
          )}
        </Grid>
        <Divider />
        <Typography>Contact: {profile.email}</Typography>
        <Typography>Location: {profile.location}</Typography>
        <Typography>Genres: {profile.genres}</Typography>
        <Typography>Availability: {profile.availability}</Typography>
        <Typography>Band Experience: {profile.bandExperience}</Typography>
        {renderAllInstruments()}
        <Grid>
          <Grid item xs={12} align="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() =>
                isOwnProfile
                  ? navigate("/create")
                  : window.location.assign(`mailto:${profile.email}`)
              }
            >
              {isOwnProfile ? "New Post" : "Send Email"}
            </Button>
          </Grid>
        </Grid>
      </WidgetWrapper>
    )
  );
};

export default ProfileWidget;
