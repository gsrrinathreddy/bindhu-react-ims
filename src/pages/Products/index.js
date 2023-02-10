import { CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { fetchProducts } from "../../features/Products/productsSlice";
import { Grid } from "@mui/material";

import ICard from "../../components/ICard";
export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log("product", product.products);
  console.log("true or false", product.loading);
  return (
    <>
      {product.loading && <CircularProgress />}
      {!product.loading && product.error ? (
        <Typography>Error: {product.error}</Typography>
      ) : null}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ backgroundColor: "pink" }}
      >
        {!product.loading && product.products.length
          ? product.products.map((product) => {
              return (
                <Grid xs={3} sm={3} md={3} pt={5}>
                  <ICard
                    title={product.title}
                    id={product.id}
                    price={product.price}
                    brand={product.brand}
                    thumbnail={product.thumbnail}
                    description={product.description}
                    rating={product.rating}
                  ></ICard>
                </Grid>
              );
            })
          : null}
      </Grid>
      <Button color="inherit" onClick={() => dispatch(fetchProducts())}>
        Fetch Products
      </Button>
    </>
  );
}
