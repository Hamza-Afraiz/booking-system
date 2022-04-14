//lib
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useTourStyles = makeStyles<Theme>({
  tourContainer: {
    width: "28%",
    minWidth: "360px",
    maxHeight: "418px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    backgroundColor: "#FFFFFF",
    margin: "0% 3% 4% 1%",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    borderRadius: "12px",
  },
  tourDetailsContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    padding: "0% 4% 1.5% 4%",
  },
  tourImage: {
    width: "100%",
    height: "225px",
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px",
  },
  tourDescription: {
    fontSize: "0.9rem",
    lineHeight: "24px",
    margin: "1% 0 1% 0",
    color: "#999999",
    textAlign: "left",
  },
  priceAndTimeDetails: {
    width: "100%",
    display: "flex",
    justifyContent:'space-between',
    alignItems:'center'
  },
  tourName: {
    fontSize: "20px",
    lineHeight: "30px",

    marginTop: "1%",
  },
});
