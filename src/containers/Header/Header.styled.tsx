//lib
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//src
import headerBackground from "../../assets/images/landingPageImage.png";
import whiteHeader from "../../assets/images/header.png";

interface headerStylesProps {
  routeName?: string;
}

const headerStyles = makeStyles<Theme, headerStylesProps>((theme)=>({
  header: {
    backgroundImage: ({ routeName }) =>
      routeName === "/" ? `url(${headerBackground})` : `url(${whiteHeader})`,
    color: ({ routeName }) => (routeName === "/" ? "transparent" : "white"),
    minWidth:'100%'
    
  },
  headerTabs: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "35%",
    marginRight: "35%",
  },
  headerTab: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "1rem",
    color: "#202445",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      textDecorationColor: "#f83030",
    },
    "&:visited": {
      textDecoration: "underline",
      textDecorationColor: "#f83030",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.5rem",
      
    },
  },
}));
export default headerStyles;
