import Link from 'next/link';
import Image from 'next/image';

import Navbar from './navbar.tsx'
import NavItem from './navItem.tsx'

import logoTitle from '../../public/images/titulo-metacoffe.png';
import logoImg from '../../public/images/logo-metacoffe.png';

const Header = () => {
   return (
      <header className="flex justify-between items-center sticky top-0
      bg-amber-100 z-10 border-1 border-amber-800">
         <Link href="/">
            <a>
               <span className="flex justify-center items-center bg-red-700">
                  <Image
                     src={logoImg}
                     alt="logo del juego"
                     width={102}
                     height={74}
                  />
                  <Image
                     src={logoTitle}
                     alt="Imagen con el título del juego y la página web"
                     width={310}
                     height={50}
                  />
               </span>
            </a>
         </Link>
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
