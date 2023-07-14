import Input from "../Atoms/Input";
import Logo from "./Logo";
import "./Navbar.css";
import NumResult from "./NumResult";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Input className="search" type="text" placeholder="Search movies..." />
      <NumResult />
    </nav>
  );
}
