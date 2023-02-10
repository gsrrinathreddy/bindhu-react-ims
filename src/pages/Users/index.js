import { CircularProgress, TableContainer, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { fetchUsers } from "../../features/Users/usersSlice";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user.users);
  console.log("true or false", user.loading);
  return (
    <>
      <h4>List of Users</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Id </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>USERNAME</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>EMAIL</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>PHONE NO</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ADDRESS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.loading && <CircularProgress />}
            {!user.loading && user.error ? (
              <Typography>Error: {user.error}</Typography>
            ) : null}
            {!user.loading && user.users.length
              ? user.users.map((user) => {
                  return (
                    <TableRow
                      key={user.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{user.id}</TableCell>
                      <TableCell align="left">{user.username}</TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.phone}</TableCell>
                      <TableCell align="left">{user.address.city}</TableCell>
                    </TableRow>
                  );
                })
              : null}
            <Button color="inherit" onClick={() => dispatch(fetchUsers())}>
              Fetch Users
            </Button>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
