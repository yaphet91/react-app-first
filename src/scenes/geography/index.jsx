import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="Geography Based Traffic"
        subtitle="Full of traffics and sales around the globe"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
