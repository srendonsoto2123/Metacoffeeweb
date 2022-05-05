import Image from 'next/image';
import Link from 'next/link';

import React, { ReactNode } from 'react';

interface Props {
   children: ReactNode
}

const Navbar = ({ children }: Props) => {
   return (
   <>
      <nav className="lg:flex lg:flex-row lg:justify-around lg:items-stretch list-none
      hidden grow overscroll-auto">
         {children}
      </nav>
   </>
   );
}

export default Navbar;
