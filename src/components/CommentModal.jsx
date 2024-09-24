import React from "react";
import { Comments } from "../hooks/useComment";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"; 

const CommentModal = ({ open, onClose }) => {
  const { handleSubmit, comment, setComment } = Comments();

  const handleFormSubmit = (e) => {
    handleSubmit(e, onClose); 
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a Comment</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .MuiTextField-root": { width: "60ch" },
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Comment:
          </Typography>
          <TextField
            required
            id="outlined-required"
            autoFocus
            defaultValue="Type new comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentModal;
