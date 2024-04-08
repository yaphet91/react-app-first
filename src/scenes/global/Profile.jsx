import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 20px 10px 20px">
      <Box display="flex" alignItems="start" justifyContent="end">
        <Link to="/">
          <IconButton sx={{ color: colors.blueAccent[500] }}>
            <CloseOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
      <Header title="Profile Info" subtitle="Welcome, Japh Dev" />
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src="../../assets/user.jpg"
            alt="user-profile"
            width="200px"
            height="200px"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            fontWeight="bold"
            color={colors.grey[100]}
            sx={{ m: "5px 0 0 0" }}
          >
            Japh Dave
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            VIP Admin
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            color={colors.redAccent[400]}
            m="0 0 15px 0"
          >
            Profolio
          </Typography>
          <Box
            m="0 10% 0 5%"
            p="0 10% 0 5%"
            backgroundColor={colors.primary[400]}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb="20px"
              borderBottom={`10px solid ${colors.primary[500]}`}
              borderRadius="5px"
              pt="20px"
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Full Name
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                Japhet Dawit
              </Typography>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gap="15px"
              alignItems="center"
              justifyContent="center"
              mb="20px"
              borderBottom={`10px solid ${colors.primary[500]}`}
            >
              <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                fontWeight="bold"
              >
                Programmer
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                Python coder
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                Web Developer
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                React Developer
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                Full Stack Developer
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                HTML CSS JavaScript
              </Typography>
              <Typography variant="h5" color={colors.blueAccent[200]}>
                Designer
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Email
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                japh91@outlook.com
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              pt="20px"
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Role
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                VIP Admin
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              pt="20px"
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Status
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                Active
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              pt="20px"
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Created At
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                2024-01-07
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              pt="20px"
            >
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Updated At
              </Typography>
              <Typography variant="h5" color={colors.grey[100]}>
                2024-04-05
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
