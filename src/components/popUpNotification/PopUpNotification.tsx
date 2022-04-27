//lib
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


interface PopUpProps {
  popUpText: string;
  onOk:()=>void
  onCancel?:()=>void
  
}

const PopUpNotification = ({ popUpText,onOk }: PopUpProps) => {
  const [openPopUp, setPopUp] = React.useState(true);
  const [popUpInfo, setPopUpInfo] = React.useState(popUpText);

  const closePopUp = () => {
    setPopUp(!openPopUp);
    onOk()
  };
  React.useEffect(() => {
    setPopUpInfo(popUpText);
    if (popUpText) {
      setPopUp(true);
    }
  }, [popUpText]);

  return (
    <div>
      <Dialog onClose={closePopUp} open={openPopUp}>
        <DialogTitle>{popUpInfo}</DialogTitle>
        <DialogActions>
          <Button onClick={closePopUp}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpNotification;
