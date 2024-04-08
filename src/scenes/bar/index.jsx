import BarChart from '../../components/BarChart';
import Header from '../../components/Header';
import { Box } from '@mui/material';

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Sales Quantity
" subtitle="Full view of the Sales" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;