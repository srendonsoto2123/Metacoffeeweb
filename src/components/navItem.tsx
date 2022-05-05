import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './navItem.module.css';

import cafeTostado from '../../public/images/cafe-tostado.png';

interface Props {
   href?: string
   isActive?: boolean
   children: ReactNode
}

const NavItem = ({ href = "", isActive = false, children }: Props) => {
   return (
      <Link href="#historia">
         <a className='
            flex
            flex-row
            items-center
            align-middle
            group
            h-full
            rounded-md
            font-semibold
            text-base text-green-800
            hover:text-green-600
         '>
            <span className="flex align-center opacity-0 group-hover:opacity-100 group-hover:animate-bounce">
               <Image
                  src={cafeTostado}
                  alt="Img"
                  width={42}
                  height={32}
                  layout="fixed"
               />
            </span>
            {children}
         </a>
      </Link>
   );
};

export default NavItem;
