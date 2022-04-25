// import {
//     withStyles
// } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// export const CustomTextField = withStyles({
//     root: {
//       '& label.Mui-focused': {
//         color: 'green',
//       },
//       '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//       },
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//           borderColor: 'red',
//         },
//         '&:hover fieldset': {
//           borderColor: 'yellow',
//         },
//         '&.Mui-focused fieldset': {
//           borderColor: 'green',
//         },
//       },
//     },
//   })(TextField);

import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CustomTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "#F16B51",
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F16B51",
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#F16B51",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#F16B51",
    },
  },
}));
