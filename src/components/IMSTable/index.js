import { Button, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { fetchUsers } from "../../Features/Users/usersSlice";
export default function UsersPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("posts", user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            List of Users
            {user.loading ? <CircularProgress /> : null}
            {!user.loading && user.error ? (
              <Typography>Error: {user.error}</Typography>
            ) : null}
            {!user.loading && user.users.length
              ? user.users.map((user) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user.name}
                      </TableCell>
                      <TableCell align="right">{user.id}</TableCell>
                      <TableCell align="right">{user.username}</TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                      <TableCell align="right">{user.phone}</TableCell>
                      <TableCell align="right">{user.address.city}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>

      <Button color="inherit" onClick={() => dispatch(fetchUsers())}>
        Fetch Products
      </Button>
    </>
  );
}
