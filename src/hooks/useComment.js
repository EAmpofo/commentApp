import { useState } from "react";
import { useAddCommentMutation } from "../store/services/coments";

export const Comments = () => {
  const [addComment] = useAddCommentMutation();
  const [comment, setComment] = useState("");

  const postId = Math.floor(Math.random() * 100);
  const userId = Math.floor(Math.random() * 100);

  const handleSubmit = async (e, onClose) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        await addComment({ body: comment, postId, userId });
        setComment("");
        if (onClose) {
          onClose();
        }
      } catch (err) {
        console.error("Failed to add comment:", err);
      }
    }
  };

  return { handleSubmit, comment, setComment };
};
