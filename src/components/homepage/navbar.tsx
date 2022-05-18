import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Navbar({ children }: Props) {
  return (
    <>
      <nav
        className="hidden sm:flex sm:flex-row sm:justify-around sm:items-stretch
      bg-amber-50 lg:basis-3/5"
      >
        {children}
      </nav>
    </>
  );
}
