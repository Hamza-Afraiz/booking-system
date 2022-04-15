//lib
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";

//src
import { LogoText } from "../../styledComponents";

//style
import "./Header.css";
import headerStyles from "./Header.styled";

interface HeaderProps {
  showBookedTours(show: boolean): void;
}

const Header = ({ showBookedTours }: HeaderProps) => {
  const { pathname: routeName } = useLocation();
  const navigate = useNavigate();

  const headerStylesClasses = headerStyles({ routeName });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className={headerStylesClasses.header}
        elevation={0}
      >
        <Toolbar>
          <LogoText  onClick={()=>{navigate('/')}}color={routeName === "/" ? "white" : "black"}>
            TourBay
          </LogoText>
          <div className={headerStylesClasses.headerTabs}>
            <div
              onClick={() => {
                navigate("/Tours");
                showBookedTours(false);
              }}
              className={headerStylesClasses.headerTab}
            >
              Tours
            </div>
            <div className={headerStylesClasses.headerTab}>Add Tours</div>
            <div
              className={headerStylesClasses.headerTab}
              onClick={() => {
                navigate("/Tours");
                showBookedTours(true);
              }}
            >
              My Tours
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
