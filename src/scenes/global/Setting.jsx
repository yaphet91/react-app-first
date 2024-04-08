import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Setting = () => {
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
        <Header title="Settings" subtitle="version 1.0.1" />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box>
          <IconButton>
            <SettingsIcon  sx={{ color: colors.blueAccent[100], fontSize: "80px" }}  />
          </IconButton>
        </Box>
        <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
          There are no settings available for now!!
        </Typography>
      </Box>
    </Box>
  );
};

export default Setting;
