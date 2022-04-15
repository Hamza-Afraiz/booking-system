import { TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const LogoText = styled(Typography)<TypographyProps>(
  ({ variant, theme, color }) => ({
    marginLeft: "1%",
    variant,
    component: "div",
    "&:hover": {
      cursor: "pointer",
    },
  })
);
