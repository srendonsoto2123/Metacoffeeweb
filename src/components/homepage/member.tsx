import Image from 'next/image';

interface Props {
  img: string;
  name: string;
  cargo?: string;
  title?: string;
  redSocial: string;
}

export default function Member({
  img,
  name,
  title = 'Miembro del Equipo',
  redSocial
}: Props) {
  return (
    <section className="inline-flex flex-col border-2 rounded border-slate-200 p-2 m-4">
      <span>
         <Image
           src={img}
           alt="Imagen del participante del juego"
           width={200}
           height={200}
           objectFit="contain"
         />
      </span>
      <h2 className="text-center">{name}</h2>
      { title !== undefined && <strong className="text-center">{title}</strong> }
      <a 
         className='text-center'
         href={redSocial}>Más información</a>
    </section>
  );
}
