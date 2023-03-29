import Post from "../../components/Post";
import SearchBar from "../../components/SearchBar";
import posts from "../../data/posts.json";
import users from "../../data/users.json";

let params = new URL(document.location).searchParams;
let search = params.get("search");

if (search) {
  let newPosts = [];
  for (const post of posts) {
    const user = users.find((user) => user.id === post.userId);
    if (
      post.text.toUpperCase().includes(search.toLocaleUpperCase()) ||
      user.username.toUpperCase().includes(search.toUpperCase())
    ) {
      newPosts.push(post);
    }
  }
  posts = newPosts;
}

posts.sort((a, b) => b.timestamp - a.timestamp);

const FeedPage = () => {
  return (
    <>
      <SearchBar searchParam={search} />
      {posts.map((post, i) => (
        <Post postId={post.id} keyIndex={i} isClickable={true} />
      ))}
    </>
  );
};

export default FeedPage;
