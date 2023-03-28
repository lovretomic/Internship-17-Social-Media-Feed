import { useParams } from "react-router-dom";

import Post from "../../components/Post";
import posts from "../../data/posts.json";

const PostPage = () => {
  const { postId } = useParams();
  return (
    <div>
      <Post postId={postId} keyIndex={0} />
    </div>
  );
};

export default PostPage;
