import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      variant="dark"
      className="px-3 bg-primary text-white"
      style={{ background: "red" }}
    >
      <Navbar.Brand>React Text App</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
