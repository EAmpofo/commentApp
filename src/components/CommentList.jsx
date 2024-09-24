import React from "react";
import {
  useGetCommentsQuery,
  useDeleteCommentMutation,
} from "../store/services/coments";
import getInitials from "../utils/utils";
import { useCommentActions } from "../hooks/useCommentActions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red, pink, blue, green } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CommentList = () => {
  const { data, error, isLoading } = useGetCommentsQuery();
  const comments = data?.comments || [];

  const [deleteComment] = useDeleteCommentMutation();
  const { anchorEl, currentCommentId, handleClick, handleClose } =
    useCommentActions();
  const handleDelete = () => {
    if (currentCommentId) {
      deleteComment(currentCommentId);
    }
    handleClose();
  };

  const avatarColors = [pink[500], red[500], blue[500], green[500]];
  const getRandomColor = () => {
    return avatarColors[Math.floor(Math.random() * avatarColors.length)];
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching comments: {error.message}</p>;

  return (
    <>
      {comments.map((comment) => (
        <Card
          key={comment.id}
          variant="outlined"
          sx={{
            minWidth: "23%",
            borderRadius: "10px",
            background: "#FFFFFF",
            boxShadow: " 6.2px 3.2px 23px rgba(0, 0, 0, 0.05)",
            marginBottom: 2,
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="avatar">
                {getInitials(comment?.user?.fullName)}
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={(event) => handleClick(event, comment.id)}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={comment?.user?.fullName}
            subheader={comment?.user?.username}
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {comment.body}
              
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <Typography variant="body2">{comment?.likes}</Typography>
            <IconButton aria-label="share" sx={{ marginLeft: 1 }}>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleDelete}>Delete Comment</MenuItem>
          </Menu>
    </>
  );
};

export default CommentList;
