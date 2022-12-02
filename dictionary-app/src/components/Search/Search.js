import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Alert, Box, Dialog } from "@mui/material";
import { debounce } from "lodash";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import DeleteModal from "../Modal/DeleteModal";

const Search = ({ word, setWord, setMeanings }) => {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleClickOpen = () => setOpenDeleteModal(true);
  const handleClose = () => setOpenDeleteModal(false);

  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const handleOpenSnackBar = () => setOpenSnackBar(true);
  const handleCloseSnackBar = () => setOpenSnackBar(false);

  const [openDeleteSnackBar, setOpenDeleteSnackBar] = React.useState(false);
  const handleOpenDeleteSnackBar = () => setOpenDeleteSnackBar(true);
  const handleCloseDeleteSnackBar = () => setOpenDeleteSnackBar(false);

  const handleText = debounce((text) => {
    setWord(text);
    setMeanings([]);
  }, 300);

  const AddNewWordApi = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post(
        "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/add",
        {
          word,
        }
      );
    } catch (error) {
      console.log(error);
    }
    handleOpenSnackBar();
  };

  const DeleteWordApi = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.delete(
        "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/remove",
        {data:{
          word,
        }}
      );
    } catch (error) {
      console.log(error);
    }
    handleClose();
    handleOpenDeleteSnackBar();
   
  };

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Please Enter Word"
        variant="standard"
        fullWidth
        onChange={(e) => handleText(e.target.value)}
      />
      <Stack direction="row" spacing={2} mt={4} mb={3}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={handleClickOpen}
          disabled={word.length === 0}
        >
          Delete word
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={AddNewWordApi}
          disabled={word.length === 0}
        >
          Add Word
        </Button>
      </Stack>

      <Dialog open={openDeleteModal} onClose={handleClose}>
        <DeleteModal
          open={openDeleteModal}
          onClose={handleClose}
          DeleteWordApi={DeleteWordApi}
        />
      </Dialog>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          The word <b>{word} </b> has been added successfully.
        </Alert>
      </Snackbar>

      <Snackbar
        open={openDeleteSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseDeleteSnackBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseDeleteSnackBar}
          severity="error"
          sx={{ width: "100%" }}
        >
          The word <b>{word} </b> has been deleted successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Search;
