import { Box, IconButton, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcme to the new dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "1px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px " }} />
            <Typography>DOWNLOAD REPORTS</Typography>
          </Button>
        </Box>
      </Box>
      {/* GRIDS AND CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
            title="23,532"
            subtitle="Email Sent"
            progress="0.6"
            increase="+21%"
          />
        </Box>
        {/* SALES */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridAutoRows="140px"
        >
          <StatBox
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[500] }} />}
            title="45,523"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+31%"
          />
        </Box>
        {/*  PERSON ADD */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridAutoRows="140px"
        >
          <StatBox
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
            title="23,532"
            subtitle="New Clients"
            progress="0.3"
            increase="+11%"
          />
        </Box>
        {/* TRAFFIC */}
        <Box
          gridColumn="span 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          gridAutoRows="140px"
        >
          <StatBox
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
              />
            }
            title="88,392,402"
            subtitle="Traffic Inbounds"
            progress="0.8"
            increase="+55%"
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        > 
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                fontWeight="600"
                color={colors.grey[100]}
                variant="h5"
              >
                Revenue Generated
              </Typography>
              <Typography
                fontWeight="bold"
                color={colors.greenAccent[500]}
                variant="h3"
              >
                $72,354.53
              </Typography>
            </Box>
            <Box>
            <Link to="/line">
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ color: colors.greenAccent[500], fontSize: "26px" }}
                />
              </IconButton>
          </Link>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        
        </Box>

        {/* TRANSACTON */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Typography fontWeight="600" color={colors.grey[100]} variant="h5">
              Recent Transaction
            </Typography>
          </Box>
          <Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={"${transaction.txId}-${i}"}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px"
                borderBottom={`4px solid ${colors.primary[500]}`}
              >
                <Box>
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    color={colors.greenAccent[500]}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color={colors.grey[100]}>
                    {transaction.date}
                  </Typography>
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  borderRadius="4px"
                  p="5px 10px"
                >
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          p="30px"
        >
          <Box>
            <Typography  variant="h5">
              Campaign
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="120" />
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              sx={{ mt: "15px" }}
            >
              $45,455 Revenue Generated
            </Typography>
            <Typography color={colors.grey[100]} variant="h6">
              Includes extra misc expenditures & costs
            </Typography>
          </Box>
        </Box>

        {/* SALES LINE */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            fontWeight="600"
            variant="h5"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Geography Based Traffic */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography fontWeight="600" variant="h5" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        {/*  */}
      </Box>
      {/* Rows and grids */}
    </Box>
  );
};

export default Dashboard;
