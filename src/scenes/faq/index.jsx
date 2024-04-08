import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion sx={{ mb: "15px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            How do I create an event?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.grey[100]} fontWeight="bold">
            To create an event, Click on the Date.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion mb="10px" sx={{ borderRadius: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            How do I delete an event?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>
            To delete an event, click on the Event.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion mb="10px" sx={{ borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            How do I change the title of an event?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>
            To change the title of an event, click on the Event in the Sidebar
            to Edit the Event.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion mb="10px" sx={{ borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            How do I change the password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>
            Changing is not available in this version
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded mb="10px" sx={{ borderRadius: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            Who is the developer of this App?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>
            This App is developed by Yafiet Aron
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion mb="10px" sx={{ borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            What Version is this App?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "bold" }}>
            This is the latest version of this App. v. 1.0.1 is the latest
            version
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h5" color={colors.blueAccent[400]} m="25px">
        Version 1.0.1 React Admin
      </Typography>
    </Box>
  );
};
export default FAQ;
