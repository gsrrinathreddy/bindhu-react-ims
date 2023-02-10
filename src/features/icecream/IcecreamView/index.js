import { Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import IMSCard from "../../../components/IMSCard";
import { Box } from "@mui/material";
import { ordered, wished } from "../IceCreamSlice";
import Blackforest_icecream from "../../../Assets/icecream/Blackforest_icecream.jpg";
import browine from "../../../Assets/icecream/brownie.jpg";
import butterscotch from "../../../Assets/icecream/butterscotch.jpg";
import chocolate from "../../../Assets/icecream/chocolate.jpg";
import cone from "../../../Assets/icecream/cone.jpg";
import icecreamBar from "../../../Assets/icecream/icecreamBar.jpg";
import MixedFruit from "../../../Assets/icecream/MixedFruit.jpg";
import Vanilla from "../../../Assets/icecream/Vanilla.jpg";
import Apricotbasil from "../../../Assets/icecream/Apricot-basil.jpg";
export default function IcecreamView() {
  const IceCreamList = [
    {
      title: "Blackforest icecream",
      photo: Blackforest_icecream,
      actualPrice: 180,
      discountPrice: 175,
      rating: 4.1,
      sellingstatus: "Best Seller",
    },
    {
      title: "Browine",
      photo: browine,
      actualPrice: 200,
      discountPrice: 195,
      rating: 4.8,
      sellingstatus: "Premium",
    },
    {
      title: "ButterScotch",
      photo: butterscotch,
      actualPrice: 120,
      discountPrice: 100,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Chocolate",
      photo: chocolate,
      actualPrice: 150,
      discountPrice: 120,
      rating: 4.7,
      sellingstatus: "Best Seller",
    },
    {
      title: "Cone",
      photo: cone,
      actualPrice: 100,
      discountPrice: 97,
      rating: 4.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "IcecreamBar",
      photo: icecreamBar,
      actualPrice: 60,
      discountPrice: 55,
      rating: 4.2,
      sellingstatus: "Best Seller",
    },
    {
      title: "Vanilla",
      photo: Vanilla,
      actualPrice: 100,
      discountPrice: 95,
      rating: 4.2,
      sellingstatus: "Best Seller",
    },
    {
      title: "MixedFruit",
      photo: MixedFruit,
      actualPrice: 130,
      discountPrice: 100,
      rating: 4.5,
      sellingstatus: "Premium",
    },
    {
      title: "Apricotbasil",
      photo: Apricotbasil,
      actualPrice: 190,
      discountPrice: 175,
      rating: 4.8,
      sellingstatus: "Premium",
    },
  ];
  let ordername = "Icecream";
  return (
    <>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 5, sm: 10, md: 12 }}
          sx={{ background: "pink", padding: "20px" }}
        >
          {IceCreamList.map((item) => {
            return (
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
                  sellingstatus={item.sellingstatus}
                  ordername={ordername}
                  order={ordered}
                  addfav={wished}
                ></IMSCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
