import Image from 'next/image'

import logoTitle from '../../public/images/titulo-metacoffe.png';
import logoImg from '../../public/images/logo-metacoffe.png';

interface Props {
   
};

export default function Logo ({}: Props) {
   return (
      <>
         <span className="flex justify-center items-center">
            <span className="hidden sm:flex sm:justify-center">
               <Image
                  src={logoImg}
                  alt="logo del juego"
                  width={102}
                  height={74}
               />
            </span>
            <span className="flex items-center">
               <Image
                  src={logoTitle}
                  alt="Imagen con el título del juego y la página web"
                  width={430}
                  height={70}
               />
            </span>
         </span>
      </>
   )
}
