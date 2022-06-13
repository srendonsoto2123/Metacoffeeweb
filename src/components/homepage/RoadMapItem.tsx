import { ReactNode } from 'react';

import Image from 'next/image';

import cafeTostado from '../../../public/images/cafe-tostado-cut.png';

interface Props {
  title: string;
  anio: string;
  children: ReactNode;
}

export default function RoadMapItem({ title, anio, children }: Props) {
  return (
    <section className="flex flex items-center gap-2 justify-center">
      <span>
        <Image
          src={cafeTostado}
          alt="Img de café tostado"
          width={30}
          height={30}
          objectFit="contain"
        />
      </span>
      <div className="flex justify-center items-center gap-2">
        <div>
          <strong className="text-center">{anio}</strong>
          <br />
          <h2 className="inline font-bold text-sm">{title}: </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
