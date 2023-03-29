import classes from "./index.module.css";
import SearchBar from "../SearchBar/SearchBar";

let params = new URL(document.location).searchParams;
let search = params.get("search");

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
      <SearchBar searchParam={search}></SearchBar>
    </header>
  );
};

export default Header;
