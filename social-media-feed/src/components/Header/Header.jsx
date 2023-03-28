import classes from "./index.module.css";

const Header = () => {
  const handleTitleClick = () => {
    window.location.href = "/feed";
  };
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle} onClick={() => handleTitleClick()}>
        Social Media Feed
      </h1>
      <p className={classes.headerSubtitle}>Internship #17</p>
    </header>
  );
};

export default Header;
