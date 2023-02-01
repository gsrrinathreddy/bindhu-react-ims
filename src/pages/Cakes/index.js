import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from "react-redux";
import CakeView from "../../features/cake/CakeView";
import { Google } from "@mui/icons-material";
import IMSDialog from "../../components/IMSDialog/index";

export default function Cakes() {
  let orders = useSelector((state) => state.cake.ordercakes);
  return (
    <>
      <CakeView></CakeView>

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
