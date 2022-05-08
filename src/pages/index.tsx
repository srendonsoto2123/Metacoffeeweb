import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
import Section from '../components/section';
import Card from '../components/card';
import Title from '../components/title';

import fotoAndrea from '../../public/images/foto-andrea.png'
import imgArriero from '../../public/images/img-arriero.png'
import imgCafetera from '../../public/images/img-cafetera.png';
import sacoCafeLogo from '../../public/images/saco-cafeLogo.png';
import fondo from '../../public/images/img-fondoCafetero.png';

const Home: NextPage = () => {
   return (
      <Layout title="Metacoffeecoin">
         <div className="bg-amber-50">
            <marquee behavior="scroll" className="text-base py-2 font-semibold
            bg-red-700 text-white lg:text-2xl lg:py-3">Próximamente contratos
            cripto</marquee>
            <Image src={fondo} alt="Fondo cafetero" objectFit="contain" />
            <div className="flex flex-col gap-2 px-2">
               <Section href={imgArriero} key="historia">
                  <Title title='Un poco de historia' id="historia" />
                  <span className="text-center"><strong><em>“El café es la segunda bebida más consumida en
                  el mundo, después del agua”.</em></strong></span>
                  <p className="text-left px-4 lg:px-10 mt-4"> Toda esta aventura comienza unos siglos atrás en Etiopía,
                  África, donde el café se consumía en infusiones calientes o
                  también masticando sus hojas, pero fueron los árabes, quienes
                  son los responsables de su expansión, primero por todo el
                  mundo árabe llegando a Turquía en 1554.</p>
                  <p className="hidden lg:block">En el siglo XVII
                  entró a Europa por el puerto de Venecia y se expandió por el
                  continente para finalmente llegar a América hacia el siglo
                  XVIII. Los responsables de esta expansión por nuevos
                  continentes fueron los holandeses que no querían depender más
                  de los árabes. Fue así como a principios del siglo XVIII
                  Holanda lideraba la producción mundial de café. El café en
                  Colombia, tiene alrededor de 300 años de historia desde que
                  los jesuitas lo trajeron en el siglo XVIII. En el año 1835 se
                  exportaban los primeros sacos producidos en la zona oriental,
                  desde la aduana de Cúcuta. </p>
               </Section>
               <Section href={imgCafetera} positionImage='right' rotateImage="left">
                  <div className="text-center">
                     <article className="mb-2">
                        <Title title='¡Bienvenido a Metacoffeecoin!' />
                        <p className="text-left px-4 lg:px-10 mb-4">¡MetaCoffeeCoin es el primer juego metaverso, que lleva el
                        mundo virtual al mundo real, permite producir el mas
                        delicioso y fino café de alta calidad, donde los jugadores
                        cultivan recolectan y procesan el producto desde sus
                        interfaces virtuales, permitiendo luego obtener el mejor
                        café del mundo en sus tazas y disfrutar del producto
                        procesado. </p>
                        <span><strong><em>“Cultiva y recolecta tu café virtual y
                        disfrútalo en tu taza real”</em></strong></span>
                     </article>
                     <article>
                        <Title title = "Juega y gana" />
                        <p className="text-left px-10">MetaCoffeeCoin es un tipo de juego del metaverso que
                        funciona a través de tokens en Blockchain donde los jugadores
                        son propietarios de sus propias parcelas, ganando tokens y
                        usándolos para mejorar sus producciones de café.</p>
                     </article>
                  </div>
               </Section>
               <Section href={sacoCafeLogo} rotateImage="none">
                  <div className="basis-3/5 text-center">
                     <Title title="¿Cómo jugar?" />
                     <p className="text-left px-4 lg:px-10">Los jugadores de MetaCoffeeCoin disfrutarán de todas las
                     etapas del proceso del café en las pantallas de sus dispositivos
                     móviles y/o computadores; desde la siembra hasta el empaque del
                     producto y la solicitud de envío a la dirección requerida.
                     Durante cualquier etapa del proceso el jugador puede adquirir o
                     vender los productos de estas etapas de producción del café en
                     el Marketplace, el cual estará disponible con los tokens de
                     MetaCoffeeCoin, dándole utilidad a los mismos y ofreciendo
                     servicio de quema de tokens, garantizando control total sobre la
                     inflación y deflación de la tokenomía de MetaCoffeeCoin.
                     </p>
                  </div>
               </Section>
            </div>
         </div>
      </Layout>
   )
}

export default Home
