import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  positionImage?: 'left' | 'right';
  rotateImage?: 'left' | 'right' | 'none';
}

export default function Section({
  children,
  href,
  positionImage = 'left',
  rotateImage = 'right'
}: Props) {
  return (
    <>
      <section
        className={`flex flex-col-reverse gap-8 ${
          positionImage === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } lg:justify-center
         items-center bg-amber-100 border-dashed border-2
         border-amber-800 rounded-sm pb-6 lg:w-4/5`}
      >
        {href !== undefined && (
          <span
            className={`relative origin-center ${
              rotateImage === 'left' && '-rotate-12'
            } ${rotateImage === 'right' && 'rotate-12'}`}
          >
            <Image
              src={href}
              alt="Imagen de arriero"
              width={220}
              height={275}
            />
          </span>
        )}
        <div className="lg:basis-3/5 text-center">
          {children || <h2>No hay contenido que mostrar</h2>}
        </div>
      </section>
    </>
  );
}
