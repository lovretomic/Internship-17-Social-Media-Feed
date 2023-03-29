import classes from "./index.module.css";

import posts from "../../data/posts.json";
import users from "../../data/users.json";

const Comments = ({ postId }) => {
  const post = posts.find((post) => post.id === +postId);
  const comments = post.comments;

  return comments.map((comment, i) => {
    const userData = users.find((user) => user.id === comment.userId);
    const postTimestamp = new Date(comment.timestamp);
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

        <p className={classes.postText}>{comment.body}</p>
        <p
          className={classes.postTimestamp}
        >{`Posted on ${postTimestamp.getDate()}/${
          postTimestamp.getMonth() + 1
        }/${postTimestamp.getFullYear()} at ${postTimestamp.getHours()}:${postTimestamp.getSeconds()}`}</p>
      </div>
    );
  });
};
export default Comments;
