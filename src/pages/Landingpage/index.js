import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";
import IMSDialog from "../../components/IMSDialog/index";
export default function Landingpage() {
  return (
    <>
      Welcome
      <Box
        sx={{ backgroundColor: "purple" }}
        justifyContent="space-between"
        pt={5}
      >
        <IMSDialog></IMSDialog>
        <h1>Contact with Us :</h1>
        <InstagramIcon></InstagramIcon>
        <FacebookIcon></FacebookIcon>
        <LinkedInIcon></LinkedInIcon>
        <Google></Google>{" "}
      </Box>
    </>
  );
}
