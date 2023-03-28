import classes from "./index.module.css";

import posts from "../../data/posts.json";
import users from "../../data/users.json";

const handlePostClick = (id) => {
  window.location.href = `/post/${id}`;
};

const Post = ({ postId, keyIndex, isClickable }) => {
  const post = posts.find((post) => post.id === +postId);
  const userData = users.find((user) => user.id === post.userId);
  return (
    <div
      className={`${classes.post} ${isClickable ? classes.clickable : ""}`}
      key={keyIndex}
      onClick={() => {
        if (isClickable) handlePostClick(post.id);
      }}
    >
      <div className={classes.postHeader}>
        <img
          className={classes.postImg}
          src={userData.profilePic}
          alt="profilePic"
        />
        <p className={classes.postUsername}>{userData.username}</p>
      </div>

      <p className={classes.postText}>{post.text}</p>
    </div>
  );
};

export default Post;
