import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const DeleteModal = ({ open, onClose, DeleteWordApi }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete words?
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={DeleteWordApi} color="error">
            Delete
          </Button>
          <Button onClick={onClose} autoFocus>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
