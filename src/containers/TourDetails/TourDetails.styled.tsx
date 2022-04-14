//lib
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useToursDetailsStyles = makeStyles<Theme>({
  tourDetailsContainer: {
    width: "90%",
    // minHeight:'100%',
    display: "flex",
    // maxHeight:'100%',
    flexDirection: "column",
    alignItems: "start",
    margin: "0% 5% 0% 5%",
  },
  priceAndLocationDetails: {
    width: "60%",
    display: "flex",
    alignItems: "space-between",
    flexWrap: "wrap",
  },
  loadingSpinner: {
    margin: "10% 0 0 50%",
  },
  heading: {
    fontFamily: '"Poppins", sans-serif',
  },
  tourDescription: {
    fontSize: "0.9rem",
    lineHeight: "24px",
    margin: "1% 0 1% 0",
    color: "#404040",
    textAlign: "left",
  },
  bookingButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "2% 0% 2% 0%",
  },
});
