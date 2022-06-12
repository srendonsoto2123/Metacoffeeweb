import { ReactNode } from "react";

interface Props {
   title: string;
   children: ReactNode
}

export default function RoadMapItem({title, children}: Props) {
   return (
      <section>
         <h2>{title}</h2>
         {children}
      </section>
   )
}
