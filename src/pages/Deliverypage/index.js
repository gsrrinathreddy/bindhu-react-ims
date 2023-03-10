import IMSStepperR from "../../components/IMSStepperR/index";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

export default function Deliverypage() {
  let steps = [
    {
      label: "Order Placed",
      description: `Your order has been Placed`,
      itemname: [],
    },
    {
      label: "dispatch Warehouse",
      description: "Item dispatch from the Store",
    },
    {
      label: "Order Recived",
      description: `Your order has been Received Successfully`,
    },
  ];
  const cartList = useSelector((state) => state.cart.cartList);
  if (cartList) {
    steps = steps.map((ele) => {
      if (ele.label === "Order Placed") {
        return {
          label: "Order Placed",
          description: `Your order has been Placed`,
          itemname: cartList.map((ele) => {
            return ele.name;
          }),
        };
      } else return ele;
    });
  }
  console.log("steps", steps);

  return (
    <>
      <Typography>
        {console.log("itemname", steps[0].itemname.length)}
        {steps[0].itemname.length >= 1 ? (
          <IMSStepperR steps={steps}></IMSStepperR>
        ) : (
          "Items Not Added to cart"
        )}
      </Typography>
    </>
  );
}
