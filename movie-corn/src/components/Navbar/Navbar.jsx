import Logo from "./Logo";
import "./Navbar.css";

export default function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
