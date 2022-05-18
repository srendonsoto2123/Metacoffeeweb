import Navbar from './navbar';
import Logo from './logo';
import NavItem from './navItem';

export default function Header() {
  return (
    <header
      className="flex flex-col justify-between items-stretch sticky top-0
      bg-amber-100 z-10 bg-red-700 lg:flex-row"
    >
      <Logo />
      <Navbar>
        <NavItem>Historia</NavItem>
        <NavItem>Introducción</NavItem>
        <NavItem>RoadMap</NavItem>
        <NavItem>WhitePaper</NavItem>
      </Navbar>
    </header>
  );
}
