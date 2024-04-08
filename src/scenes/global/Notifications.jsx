import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const Notification = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="30px">
      <Box display="flex" alignItems="start" justifyContent="end">
        <Link to="/">
          <IconButton sx={{ color: colors.blueAccent[500] }}>
            <CloseOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
      <Box>
        <Header title="Notifications" subtitle="version 1.0.1" />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box>
          <IconButton>
            <NotificationsIcon  sx={{ color: colors.blueAccent[100], fontSize: "80px" }}  />
          </IconButton>
        </Box>
        <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
          There are no Notifications unseen !!
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
