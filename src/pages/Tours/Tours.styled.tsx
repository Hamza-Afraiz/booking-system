//lib
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useToursStyles = makeStyles<Theme>({
  toursContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    margin: "1% 5% 2% 5%",
  },
  heading: {
    fontFamily: '"Poppins", sans-serif',
  },
  tours: {
    display: "flex",
    flexDirection: "row",

    flexWrap: "wrap",
  },
  loadingSpinner: {
    margin: "10% 0 0 40%",
  },
  emptyState: {
    margin: "10% 0 0 30%",
  },
  emptyStateText: {
    fontSize: "28px",
    lineHeight: "48px",
    fontFamily: '"Poppins", regular',
    color: "#797C9A",
  },
});
