import { Typography, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import IMSCard from "../../components/IMSCard";
export default function Favoritepage() {
  const favList = useSelector((state) => state.Favorites.favList);
  console.log("Favorite List items", favList);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ backgroundColor: "pink", paddingTop: "20px" }}
      >
        {favList.map((item) => {
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
              ></IMSCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
