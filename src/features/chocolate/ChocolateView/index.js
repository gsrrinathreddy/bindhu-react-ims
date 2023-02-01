import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSCart from "../../../components/IMSCart";
import { ordered, restocked } from "../chocolateSlice";

import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import IMSCard from "../../../components/IMSCard";
import IMSDialog from "../../../components/IMSDialog";
import cadburysilk from "../../../Assets/cadburysilk.jpg";
import choclairs from "../../../Assets/choclairs.jpg";
import dairymilk from "../../../Assets/dairymilk.jpeg";
import darkchocolate from "../../../Assets/darkchocolate.jpg";
import ferrerorocher from "../../../Assets/ferrerorocher.jpg";
import fuse from "../../../Assets/fuse.jpg";
import kitkat from "../../../Assets/kitkat.jpg";
import mars from "../../../Assets/mars.jpg";
import oreosilk from "../../../Assets/oreosilk.jpg";
import snickers from "../../../Assets/snickers.jpg";
import toblerone from "../../../Assets/Toblerone.jpg";

export default function ChocolateView() {
  const ChocoList = [
    {
      title: "Cadbury Silk",
      photo: cadburysilk,
      actualPrice: 200,
      discountPrice: 195,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "choclaris",
      photo: choclairs,
      actualPrice: 2,
      discountPrice: 1.5,
      rating: 4.2,
      sellingstatus: "Best Seller",
    },
    {
      title: "DairyMilk",
      photo: dairymilk,
      actualPrice: 10,
      discountPrice: 9.5,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Dark Chocolate",
      photo: darkchocolate,
      actualPrice: 180,
      discountPrice: 175,
      rating: 4.0,
      sellingstatus: "Premium",
    },
    {
      title: "Ferrerorocher ",
      photo: ferrerorocher,
      actualPrice: 1500,
      discountPrice: 1425,
      rating: 4.0,
      sellingstatus: "Premium",
    },
    {
      title: "Fuse",
      photo: fuse,
      actualPrice: 30,
      discountPrice: 29,
      rating: 3.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "Kitkat",
      photo: kitkat,
      actualPrice: 30,
      discountPrice: 29,
      rating: 4.0,
      sellingstatus: "Best Seller",
    },
    {
      title: "Mars",
      photo: mars,
      actualPrice: 70,
      discountPrice: 60,
      rating: 3.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "Oreo Silk",
      photo: oreosilk,
      actualPrice: 180,
      discountPrice: 178,
      rating: 3.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "Snickers",
      photo: snickers,
      actualPrice: 60,
      discountPrice: 58,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Toblerone",
      photo: toblerone,
      actualPrice: 50,
      discountPrice: 48,
      rating: 3.5,
      sellingstatus: "Best Seller",
    },
  ];

  let ordername = "Chocolate";

  return (
    <>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "pink", paddingTop: "20px" }}
        >
          {ChocoList.map((item) => {
            return (
              <>
                <Grid
                  item
                  display="flex"
                  justifyContent="center"
                  xs={3}
                  sm={3}
                  md={3}
                >
                  <IMSCard
                    title={item.title}
                    photo={item.photo}
                    actualPrice={item.actualPrice}
                    discountPrice={item.discountPrice}
                    rating={item.rating}
                    ordername={ordername}
                    sellingstatus={item.sellingstatus}
                    order={ordered}
                  ></IMSCard>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

// const dispatch=useDispatch();
// const numOfChocolates=useSelector((state)=>state.chocolate.numOfChocolates);
// const choco1=1
// return(<>

// <h3>Number Of Chocolates: {(numOfChocolates<choco1)?'Out Of Stock':numOfChocolates}</h3>

// <br/>
// <Button onClick={()=>{
//     dispatch(ordered(1))
// }}
// >
//     ChocolateOrder
// </Button>

// <Button onClick={()=>{
//     dispatch(restocked(1))
// }}>ChocolateRestocked</Button></>)
