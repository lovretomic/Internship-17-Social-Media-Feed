import posts from "../../data/posts.json";

posts.sort((a, b) => b.timestamp - a.timestamp);

const FeedPage = () => {
  console.log(posts);
  return posts.map((post) => (
    <>
      <img src={post.profilePic} />
      <h1>{post.userId}</h1>
      <p>{post.text}</p>
      <hr />
    </>
  ));
};

export default FeedPage;
