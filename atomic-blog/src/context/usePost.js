import { useContext } from "react";
import { PostContext } from "./PostProvider";

const usePost = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("PostContext is not defined correctly");
  }
  return context;
};

export default usePost;
