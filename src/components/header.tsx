
import Navbar from './navbar'
import NavItem from './navItem'
import Logo from './logo'

const Header = () => {
   return (
      <header className="flex flex-col justify-between items-stretch sticky top-0
      bg-amber-100 z-10 bg-red-700 lg:flex-row">
         <Logo />
         <Navbar>
            <NavItem>
               Introducción
            </NavItem>
            <NavItem>
               Historía
            </NavItem>
            <NavItem>
               RoadMap
            </NavItem>
            <NavItem>
               Whitelist
            </NavItem>
         </Navbar>
      </header>
   );
};

export default Header;
