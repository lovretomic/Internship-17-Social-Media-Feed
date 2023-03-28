import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams();
  return <div>{postId}</div>;
};

export default PostPage;
