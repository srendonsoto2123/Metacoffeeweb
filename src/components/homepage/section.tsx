import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Section({
  children,
}: Props) {
  return (
    <>
      <section
        className="flex gap-8 px-12 py-4 bg-amber-100 my-4 items-center">
         {children}
      </section>
    </>
  );
}
