import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import WidgetWrapper from "../components/WidgetWrapper";

const ProfileWidget = () => {
  const user = useSelector((state) => state.user);
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const paramId = useParams();
  const allInstruments = user.instruments;
  let isOwnProfile = false;
  console.log(user);

  // Designate wheter this is own profile or others
  if (user._id === paramId.userId) isOwnProfile = true;

  const renderAllInstruments = () => {
    return (
      <div>
        <Typography variant="h4" mt={4}>
          Instruments
        </Typography>
        {allInstruments &&
          allInstruments.length >= 1 &&
          allInstruments.map((instrument) => {
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
    <WidgetWrapper>
      <Typography
        variant="h3"
        component="h2"
        maxWidth={isMobileScreen ? "19rem" : "32rem"}
        minWidth={isMobileScreen ? null : "32rem"}
      >
        {user.name}
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
      <Typography>Contact: {user.email}</Typography>
      <Typography>Location: {user.location}</Typography>
      <Typography>Genres: {user.genres}</Typography>
      <Typography>Availability: {user.availability}</Typography>
      <Typography>Band Experience: {user.bandExperience}</Typography>
      <Typography>{renderAllInstruments()}</Typography>
      <Grid>
        <Grid item xs={12} align="center" mt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={
              () => (isOwnProfile ? navigate("/create") : navigate("/home")) //*TODO: replace home with DM route when relevant
            }
          >
            {isOwnProfile ? "New Post" : "Direct Message"}
          </Button>
        </Grid>
      </Grid>
    </WidgetWrapper>
  );
};

export default ProfileWidget;
