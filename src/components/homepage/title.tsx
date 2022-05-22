interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <h2
      className="   
         m-5
         text-2xl
         font-bold
         text-gray-100
         bg-amber-700
         border-2
         border-amber-800
         py-3
         rounded-lg
         text-center
      "
    >
      {title}
    </h2>
  );
}
