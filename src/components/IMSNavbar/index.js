import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import IMSCart from "../IMSCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IMSAutocomplete from "../IMSAutocomplete";
import FavoriteIcon from "@mui/icons-material/Favorite";

// const pages = ['Cakes','Icecreams','Chocolates','Flowers','Gifts'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function IMSNavbar(props) {
  const navigate = useNavigate();

  const ord1 = useSelector((state) => state.cake.ordercakes);
  const ord2 = useSelector((state) => state.icecream.ordericecream);
  const ord3 = useSelector((state) => state.chocolate.orderChocolates);
  const ord4 = useSelector((state) => state.flower.orderFlowers);
  const ord5 = useSelector((state) => state.gift.orderGift);
  let sum = ord1 + ord2 + ord3 + ord4 + ord5;

  let pages = props.pages;
  let settings = props.settings;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      textTransform: "none",
      my: 2,
      fontSize: isActive ? "18px" : "16px",
      display: "block",
      color: isActive ? "pink" : "white",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "10px",
      marginLeft: "10px",
    };
  };
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          backgroundImage: "linear-gradient(to right,indigo, blue,pink)",
        }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MyBakery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page} onClick={handleCloseNavMenu}>
                  <Button key={page} onClick={handleCloseNavMenu}></Button>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MyBakery
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={page}
                style={navLinkStyles}
                onClick={handleCloseNavMenu}
              >
                {/* <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button> */}
                {page}
              </NavLink>
            ))}
          </Box>
          <IMSAutocomplete></IMSAutocomplete>

          <Box>
            <Button
              color="inherit"
              variant="text"
              onClick={() => {
                navigate("/Signinpage");
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box sx={{ marginRight: "10px" }}>
            <Link to="Favoritepage">
              <FavoriteIcon></FavoriteIcon>
            </Link>
          </Box>
          <Box sx={{ marginRight: "10px" }}>
            <Link to="Cartpage">
              <IMSCart Content={sum}></IMSCart>
            </Link>
          </Box>
          <br></br>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZ7NcyrPb1A8N9PQP_9CBxFRNwb-AtIHZVA&usqp=CAU"
                ></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={setting}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default IMSNavbar;
