import Image from 'next/image';

interface Props {
   href: string
   name: string
   title?: string
   redSocial: string
}

const Card = ({ href, name, title = "Miembro del Equipo", redSocial }: Props) => {
   return (
     <section>
         <Image
            src={ href }
            alt="Imagen del participante del juego"
            width={200}
            height={200}
         />
         <h2>{name}</h2>
         <span><strong>{title}</strong></span>
         <a href={ redSocial }>Más información</a>
      </section>
   );
};

export default Card;
