//lib
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { theme } from "../../theme/Theme";

interface headerStylesProps {
  routeName?: string;
}

const homePageStyles = makeStyles<Theme, headerStylesProps>((theme) => ({
  homePage: {
    display: "flex",
    flexDirection: "column",
  },
  backgroundImageDiv: {
    width: "100%",
    height: "400px",
  },
  chooseSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchIcon: {
    width: "5%",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F16B51",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50px",
      marginTop: "2%",
    },
  },
  dateRangePicker: {
    width: "30%",
  },
  dateRange: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const SearchContainer = styled("div")(() => ({
  width: "70%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "absolute",
  top: "55%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  margin: "0px 15% 0px 15%",
  backgroundColor: "white",
  padding: "2%",
  borderRadius: "12px",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
}));
export const FilterContainer = styled("div")(() => ({
  width: "30%",
  height: "80px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default homePageStyles;
