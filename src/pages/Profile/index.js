import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="UserName"
            defaultValue="abc"
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <br />

          <TextField
            id="outlined-number"
            label="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="abc"
          />
        </div>
      </Box>
    </>
  );
}
