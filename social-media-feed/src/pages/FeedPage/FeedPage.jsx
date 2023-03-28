import Post from "../../components/Post";
import posts from "../../data/posts.json";

posts.sort((a, b) => b.timestamp - a.timestamp);

const FeedPage = () => {
  return posts.map((post, i) => <Post postId={post.id} keyIndex={i} />);
};

export default FeedPage;
