import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CommentModal from "./CommentModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={1.5}
      >
        <Typography variant="h5" gutterBottom>
          User Comments
        </Typography>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          sx={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          Add Comment
        </Button>
      </Stack>
      <CommentModal open={open} onClose={handleClose} />
    </>
  );
};

export default Header;
