import React, { ReactNode } from 'react';
import Image from 'next/image';

import cafeTostado from '../../../public/images/cafe-tostado.png';

interface Props {
  children: ReactNode;
}

export default function NavItem({ children }: Props) {
  return (
    <span
      className="
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
         text-xs
         lg:text-lg
      "
    >
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
    </span>
  );
}
