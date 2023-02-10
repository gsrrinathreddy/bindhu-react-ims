import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IMSCart from "../IMSCart";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, color } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IMSChip from "../IMSChip";
import IMSSnackbar from "../IMSSnackbar";
import IMSSpeeddial from "../IMSSpeeddial";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function IMSCard(props) {
  let dispatch = useDispatch();

  let title = props.title;
  let photo = props.photo;
  let actualPrice = props.actualPrice;
  let discountPrice = props.discountPrice;
  let rating = props.rating;
  let sellingstatus = props.sellingstatus;
  let ordername = props.ordername;
  let color = "success";
  let colwarning = "warning";
  let discount = actualPrice - discountPrice;
  let discountedPercentage = Math.floor((discount / actualPrice) * 100);
  let dpoff = discountedPercentage + "% off ";
  let orderPlaced = props.order;
  let addfav = props.addfav;

  const [expanded, setExpanded] = React.useState(false);
  const [qty, setQty] = React.useState(0);
  const [active, setActive] = React.useState();

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#f50707",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let params = {
    name: title,
    photo: photo,
    actualPrice: actualPrice,
    discountPrice: discountPrice,

    qty: parseInt(qty),
  };
  let param = {
    name: title,
    photo: photo,
    actualPrice: actualPrice,
    discountPrice: discountPrice,
    sellingstatus: sellingstatus,
    rating: rating,
    qty: parseInt(qty),
  };
  const actions = [
    { icon: <WhatsAppIcon />, name: "WhatsApp" },
    { icon: <FacebookIcon />, name: "Facebook" },
    { icon: <InstagramIcon />, name: "Instagram" },
  ];

  const like = () => {
    setActive(!active);
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
      <CardHeader title={title} />
      <Card sx={{ width: "250px", marginLeft: "40px", marginRight: "40px" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="194" image={photo} />
          <Box
            sx={{
              position: "absolute",
              alignItems: "flex-end",
              color: "white",
              top: 0,
              left: "85%",
              transform: "translateX(-50%)",
            }}
          >
            <Stack spacing={1}>
              <IMSChip label={sellingstatus} color={color}></IMSChip>
            </Stack>
            <Stack
              direction="row"
              flexDirection="row"
              justifyContent="flex-end"
              spacing={1}
            >
              <IMSChip label={rating} color={colwarning}></IMSChip>
            </Stack>
          </Box>
        </Box>
      </Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strike>Acutal Price :₹ {actualPrice}</strike> <br></br>
          <h3>
            Offer Price:₹ {discountPrice} ({dpoff})
          </h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          defaultValue={0}
          onChange={(e) => setQty(e.currentTarget.value)}
        />
        <Box>
          <Button
            onClick={() => {
              if (qty > 0) {
                {
                  handleExpandClick();
                  dispatch(orderPlaced(params));
                }
              }
            }}
          >
            <IMSSnackbar
              abc={"Add"}
              message={qty + " " + title + "  items added"}
            ></IMSSnackbar>
          </Button>
        </Box>
        <Box sx={{ width: 200, height: 250 }}>
          <IMSSpeeddial share={actions}></IMSSpeeddial>
        </Box>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            {
              dispatch(addfav(param));
            }
          }}
        >
          <FavoriteIcon
            onClick={like}
            style={{ color: active ? "red" : "grey" }}
          />
        </IconButton>
        <IMSCart Content={qty}></IMSCart>
      </CardActions>
    </Card>
  );
}
