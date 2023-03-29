import classes from "./index.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.subtitle}>Resource not found.</p>
      <a href="/feed" className={classes.link}>
        Return to feed
      </a>
    </div>
  );
};

export default NotFound;
