import type { NextPage } from 'next';
import Image from 'next/image';

import Layout from '../components/homepage/layout';
import Section from '../components/homepage/section';
import Title from '../components/homepage/title';

import fondo from '../../public/images/img-fondoCafetero.png';
import Cita from '../components/homepage/cita';
import Footer from '../components/homepage/footer';
import Member from '../components/homepage/member';
import Parrafo from '../components/homepage/parrafo';
import RoadMapItem from '../components/homepage/RoadMapItem';

import imgArriero from '../../public/images/img-arriero.png';
import imgCafetera from '../../public/images/img-cafetera.png';
import imgSacoDeCafe from '../../public/images/saco-cafeLogo.png';

const Home: NextPage = () => {
  return (
    <Layout title="Metacoffeecoin">
      <div>
        <Image src={fondo} alt="Fondo cafetero" objectFit="contain" />
        <div className="px-4">
          <Section>
            <span className="rotate-12">
              <Image
                src={imgArriero}
                alt="Imagen de arriero"
                width={220}
                height={275}
              />
            </span>
            <div className="flex-1">
              <Title title="Un poco de historia" />
              <Cita>
                {' '}
                “El café es la segunda bebida más consumida en el mundo, después
                del agua”.
              </Cita>
              <Parrafo>
                Toda esta aventura comienza unos siglos atrás en Etiopía,
                África, donde el café se consumía en infusiones calientes o
                también masticando sus hojas, pero fueron los árabes, quienes
                son los responsables de su expansión, primero por todo el mundo
                árabe llegando a Turquía en 1554.
              </Parrafo>
              <Parrafo>
                En el siglo XVII entró a Europa por el puerto de Venecia y se
                expandió por el continente para finalmente llegar a América
                hacia el siglo XVIII. Los responsables de esta expansión por
                nuevos continentes fueron los holandeses que no querían depender
                más de los árabes. Fue así como a principios del siglo XVIII
                Holanda lideraba la producción mundial de café. El café en
                Colombia, tiene alrededor de 300 años de historia desde que los
                jesuitas lo trajeron en el siglo XVIII. En el año 1835 se
                exportaban los primeros sacos producidos en la zona oriental,
                desde la aduana de Cúcuta.
              </Parrafo>
            </div>
          </Section>
          <Section>
            <div className="flex-1">
              <article className="mb-2">
                <Title title="¡Bienvenido a Metacoffeecoin!" />
                <Parrafo>
                  ¡MetaCoffeeCoin es el primer juego metaverso, que lleva el
                  mundo virtual al mundo real, permite producir el mas delicioso
                  y fino café de alta calidad, donde los jugadores cultivan
                  recolectan y procesan el producto desde sus interfaces
                  virtuales, permitiendo luego obtener el mejor café del mundo
                  en sus tazas y disfrutar del producto procesado.{' '}
                </Parrafo>
                <Cita>
                  {' '}
                  “Cultiva y recolecta tu café virtual y disfrútalo en tu taza
                  real”{' '}
                </Cita>
              </article>
              <article>
                <Title title="Juega y gana" />
                <Parrafo>
                  MetaCoffeeCoin es un tipo de juego del metaverso que funciona
                  a través de tokens en Blockchain donde los jugadores son
                  propietarios de sus propias parcelas, ganando tokens y
                  usándolos para mejorar sus producciones de café.
                </Parrafo>
              </article>
            </div>
            <span className="-rotate-12">
              <Image
                src={imgCafetera}
                alt="Imagen de cafetera"
                width={220}
                height={275}
              />
            </span>
          </Section>
          <Section>
            <span>
              <Image
                src={imgSacoDeCafe}
                alt="Saco de café con marca"
                width={220}
                height={275}
              />
            </span>
            <div className="flex-1">
              <Title title="¿Cómo jugar?" />
              <Parrafo>
                Los jugadores de MetaCoffeeCoin disfrutarán de todas las etapas
                del proceso del café en las pantallas de sus dispositivos
                móviles y/o computadores; desde la siembra hasta el empaque del
                producto y la solicitud de envío a la dirección requerida.
                Durante cualquier etapa del proceso el jugador puede adquirir o
                vender los productos de estas etapas de producción del café en
                el Marketplace, el cual estará disponible con los tokens de
                MetaCoffeeCoin, dándole utilidad a los mismos y ofreciendo
                servicio de quema de tokens, garantizando control total sobre la
                inflación y deflación de la tokenomía de MetaCoffeeCoin.
              </Parrafo>
              <p className="text-left px-4 lg:px-10"></p>
            </div>
          </Section>
        </div>
      </div>
      <div>
        <Title title="Roadmap" />
        <div className="flex gap-8">
          <RoadMapItem title="Q4" anio="2022">
            <span className="text-sm">Concepto e idea inicial</span>
            <br />
            <span className="text-sm">Inicio del desarrollo</span>
          </RoadMapItem>
          <RoadMapItem title="Q1" anio="2023">
            <span className="text-sm">Inicio de las preventas</span>
            <br />
            <span className="text-sm">y paquetes de semillas iniciales</span>
            <p className="px-4 text-xs">
              Lanzamienta de MetaCoffeen (MTF) <br /> Registros en la whitelist{' '}
              <br /> Ventas de las tierras NFT <br /> Anuncio de la whitelist{' '}
              <br /> Alfa game
            </p>
          </RoadMapItem>
        </div>
      </div>
      <div className="mx-auto">
        <Title title="Miembros del equipo" />
        <div className="flex flex-wrap justify-center items-center">
          <Member
            img="/images/foto-jose.png"
            cargo="Ceo Fundador"
            title="Analista económico"
            name="Jose Luis Cifuentes"
            redSocial={''}
          />
          <Member
            img="/images/foto-andrea.png"
            cargo="Ceo Cofundadora"
            title="desarrollador"
            name="Andrea Ramirez"
            redSocial={''}
          />
          <Member
            img="/images/foto-camilo.png"
            cargo="Cofundador"
            title="Cofundador"
            name="Jose Camilo Cifuentes"
            redSocial={''}
          />
          <Member
            img="/images/foto-jorgeIvan.png"
            title="desarrollador"
            name="Jorge Cifuentes"
            redSocial={''}
          />
          <Member
            img="/images/foto-stiven.png"
            title="desarrollador"
            name="Jhon Stiven Cardona"
            redSocial={''}
          />
          <Member
            img="/images/foto-miguel.png"
            title="desarrollador"
            name="Miguel Angel Giraldo"
            redSocial={''}
          />
          <Member
            img="/images/foto-sebastian.png"
            title="desarrollador"
            name="Sebastian Rendon"
            redSocial={''}
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
