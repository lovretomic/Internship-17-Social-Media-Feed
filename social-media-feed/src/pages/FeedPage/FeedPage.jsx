import classes from "./index.module.css";

import posts from "../../data/posts.json";
import users from "../../data/users.json";

posts.sort((a, b) => b.timestamp - a.timestamp);

const FeedPage = () => {
  console.log(posts);
  return posts.map((post, i) => {
    const userData = users.find((user) => user.id === post.userId);
    return (
      <div className={classes.post} key={i}>
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
  });
};

export default FeedPage;
