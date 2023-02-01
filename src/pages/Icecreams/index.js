import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IcecreamView from "../../features/icecream/IcecreamView";
import IMSCart from "../../components/IMSCart";
import { Google } from "@mui/icons-material";
import IMSDialog from "../../components/IMSDialog/index";

export default function Icecreams() {
  let abc = useSelector((state) => state.icecream.ordericecream);

  return (
    <>
      <IcecreamView></IcecreamView>
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
