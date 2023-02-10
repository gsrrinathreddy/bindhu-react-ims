import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
export default function IMSAutocomplete() {
  const navigate = useNavigate();
  const handlePageChange = (event) => {
    const path = event.target.innerText;
    navigate(`/${path}`);
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={items}
      onChange={handlePageChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}

const items = [
  {
    label: "Cakes",
  },
  {
    label: "Icecreams",
  },
  {
    label: "Chocolates",
  },
  {
    label: "Flowers",
  },
  {
    label: "Gifts",
  },
];
