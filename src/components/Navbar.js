import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import { useAuth } from "../context/auth";
import '../App.css'
import Logo from "../assets/images/Logo-1.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <a href="/home">
        <img  className="logocss"src={Logo} alt="logo"></img>
      </a>
      {/* <Link to="/home">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "500px", height: "400px",  alignItems:"center"  }}
        />
      </Link> */}
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          
          style={{
          top:"20px",

            textDecoration: "none",
            color: "#3A1212",
            marginInline: "-300px -20px"
            
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>

        {/* {!auth.user ? (
          <>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#3A1212",
              }}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#3A1212",
              }}
            >
              login
            </Link>
          </>
        ) : (
          <Link
            onClick={handleLogOut}
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            logout
          </Link>
        )} */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
