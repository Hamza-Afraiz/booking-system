import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

interface IconStyleProps {
  bold?: boolean;
}

export const useIconTitleStyles = makeStyles<Theme, IconStyleProps>(
  (theme: Theme) => ({
    iconsContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: "33%",
      margin:'1%'
    },
    iconTitle: {
      minWidth: "80%",
      fontSize: "0.8rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.3em",
      },
      color: "#797C9A",
      fontWeight: ({ bold }) => (bold ? "bold" : "normal"),
      fontFamily: '"Poppins", sans-serif',
      textAlign: "left",
    },
    icon: {
      display: "flex",
      height: "18px",
      width: "18px",
      [theme.breakpoints.down("md")]: {
        width: "12px",
        height: "12px",
      },
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F4F4F4",
      borderRadius: "50%",
    },
    iconContainer: {

     
      [theme.breakpoints.down("md")]: {
        
      },
    },
  })
);
