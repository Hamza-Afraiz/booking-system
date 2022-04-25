import React from "react";
import Button from "@mui/material/Button";
interface CustomButtonProps {
  width: string;
  text: string;
  display: string;
}

const CustomButton = ({ width, text, display }: CustomButtonProps) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: width,
          display: display,
          backgroundColor: "#F16B51",
          "&:hover": {
            backgroundColor: "#F16B51",
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
