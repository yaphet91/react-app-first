import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isActive = selected === title;

  return (
    <MenuItem
      icon={icon}
      // active={selected === title}
      active={isActive}
      onClick={() => setSelected(title)}
      style={{
        color: isActive ? "#6870fa" : colors.grey[100], // Font color
        backgroundColor: "transparent", // Background color
        "&:hover": {
          color: "#868dfb", // Font color on hover
          backgroundColor: "transparent", // Background color on hover
        },
      }}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      collapsed={isCollapsed}
      width="220px"
      height="auto"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: `${colors.primary[400]} `,
        },
      }}
    >
      <Menu
        iconshape="square"
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#d359ff",
                backgroundColor: active ? "#eecef9" : undefined,
              };
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {/* USER */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="../../assets/user.jpg"
                alt="user-profile"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                fontWeight="bold"
                color={colors.grey[100]}
                sx={{ m: "10px 0 0 0" }}
              >
                Japh Dave
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VIP Admin
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            icon={<HomeOutlinedIcon />}
            to="/"
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            style={{ margin: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            icon={<PeopleOutlinedIcon />}
            to="/team"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            icon={<ContactsOutlinedIcon />}
            to="/contacts"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            icon={<ReceiptOutlinedIcon />}
            to="/invoices"
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            icon={<PersonOutlinedIcon />}
            to="/form"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            icon={<CalendarTodayOutlinedIcon />}
            to="/calendar"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ Page"
            icon={<HelpOutlineOutlinedIcon />}
            to="/faq"
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            icon={<BarChartOutlinedIcon />}
            to="/bar"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            icon={<PieChartOutlineOutlinedIcon />}
            to="/pie"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            icon={<TimelineOutlinedIcon />}
            to="/line"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            icon={<MapOutlinedIcon />}
            to="/geography"
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default MySidebar;
