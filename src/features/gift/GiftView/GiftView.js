import { Button } from "@mui/material";

import { ordered, restocked, wished } from "../GiftSlice";
import { Grid } from "@mui/material";
import IMSCard from "../../../components/IMSCard";
import bullockcart from "../../../Assets/bullockcart.jpg";
import cashewcombo from "../../../Assets/cashewcombo.jpg";
import ceramicmug from "../../../Assets/ceramicmug.jpg";
import couplelamp from "../../../Assets/couplelamp.jpg";
import crystaltree from "../../../Assets/crystaltree.jpg";
import glassgift from "../../../Assets/glassgift.jpg";
import lamp from "../../../Assets/lamp.jpg";
import leatherbag from "../../../Assets/leatherbag.jpg";
import lordkrishna from "../../../Assets/lordkrishna.jpg";
import { Box } from "@mui/material";

export default function GiftView() {
  const giftList = [
    {
      title: "Bullock Cart",
      photo: bullockcart,
      actualPrice: 1800,
      discountPrice: 1500,
      rating: 3.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "Cashew Combo",
      photo: cashewcombo,
      actualPrice: 1000,
      discountPrice: 800,
      rating: 4.1,
      sellingstatus: "Premium",
    },
    {
      title: "Ceramic Mug",
      photo: ceramicmug,
      actualPrice: 500,
      discountPrice: 300,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Couple Lamp",
      photo: couplelamp,
      actualPrice: 800,
      discountPrice: 500,
      rating: 4.8,
      sellingstatus: "Best Seller",
    },
    {
      title: "Crystal Tree",
      photo: crystaltree,
      actualPrice: 1000,
      discountPrice: 800,
      rating: 4.2,
      sellingstatus: "Best Seller",
    },
    {
      title: "Glass Gift",
      photo: glassgift,
      actualPrice: 600,
      discountPrice: 400,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Lamp",
      photo: lamp,
      actualPrice: 1200,
      discountPrice: 1000,
      rating: 4.1,
      sellingstatus: "Best Seller",
    },
    {
      title: "Leather Bag",
      photo: leatherbag,
      actualPrice: 1500,
      discountPrice: 1100,
      rating: 4.5,
      sellingstatus: "Best Seller",
    },
    {
      title: "Lord Krishna",
      photo: lordkrishna,
      actualPrice: 1800,
      discountPrice: 1500,
      rating: 4.2,
      sellingstatus: "Premium",
    },
  ];
  let ordername = "Gift";
  return (
    <>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 5, sm: 10, md: 12 }}
          sx={{ background: "pink", padding: "20px" }}
        >
          {giftList.map((item) => {
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
