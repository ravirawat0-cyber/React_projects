import logo from "./../../assets/investmentLogo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} className="logo" alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
