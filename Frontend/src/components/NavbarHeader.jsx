import { Link } from 'react-router-dom'
import { Navbar } from "flowbite-react";


function NavbarHeader() {
  return (
    <Navbar fluid rounded className='bg-transparent'>
      <Navbar.Brand as={Link} href="#">
        <img src="../images/Brand.svg" alt="Brand logo" className="h-10" />
        <i><span className="font-semibold">FrodenZ Labs.</span></i>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHeader;
