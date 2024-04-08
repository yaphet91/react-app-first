import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, increase, progress, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          {icon}
          <Typography variant="h4" color={colors.grey[100]} fontWeight="bold" >{title}</Typography>
          <Typography variant="h5" color={colors.greenAccent[500]} >{subtitle}</Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
          <Typography variant="h6" color={colors.greenAccent[500]} fontStyle="italic" >{increase}</Typography>
        </Box>  
      </Box>
    </Box>
    
  )
}

export default StatBox;