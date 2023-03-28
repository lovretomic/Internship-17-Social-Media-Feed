import { useParams } from "react-router-dom";

import Post from "../../components/Post";
import Comments from "../../components/Comments";

const PostPage = () => {
  const { postId } = useParams();
  return (
    <div>
      <button onClick={() => (window.location.href = "/feed")}>
        Back to feed
      </button>
      <Post postId={postId} keyIndex={0} isClickable={false} />
      <h2 style={{ textAlign: "center" }}>Comments</h2>
      <Comments postId={postId} />
    </div>
  );
};

export default PostPage;
