import { Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
//import { iteratorSymbol } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log("cart List items", cartList);
  const navigate = useNavigate();
  let sum = 0;
  return (
    <>
      <Box>
        Order Details:
        <Grid container>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              name
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.name}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qty{" "}
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.qty} </Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              ActualPrice
            </Typography>
            {cartList.map((item) => {
              return <Typography> {item.actualPrice}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              DiscountPrice
            </Typography>
            {cartList.map((item) => {
              return <Typography> {item.discountPrice}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Amount
            </Typography>
            {cartList.map((item) => {
              sum += item.discountPrice * item.qty;
              return <Typography> {item.discountPrice * item.qty}</Typography>;
            })}
            Total amount to be paid {sum}
          </Grid>
        </Grid>
      </Box>
      <br />
      <br></br>
      <Box>
        <Grid md={2}>
          <Button
            sx={{ color: "blue" }}
            variant="text"
            onClick={() => navigate("/f")}
          >
            {" "}
            Go back to shopping{" "}
          </Button>
          <br></br>
          <Button onClick={() => navigate("order-summary")}>Place Order</Button>
        </Grid>
      </Box>
    </>
  );
}

// import { useSelector } from "react-redux"

// export default function Cartpage(){
//     let CakesOrder=useSelector((state)=>state.cake.ordercakes);
//     let chocos=useSelector((state)=>state.chocolate.orderChocolates)
//     let ice=useSelector((state)=>state.icecream.ordericecream);
//     let gift=useSelector((state)=>state.gift.orderGift);
//     return(
//         <>
//         <br/>
//         <h3>Number Of Cakes :{CakesOrder}</h3>
//         <h3>Number of IceCreams:{ice}</h3>
//         <h3>Number of Chocolates :{chocos}</h3>
//         <h3>Number of Gifts :{gift}</h3>

//         </>

//     )
// }
