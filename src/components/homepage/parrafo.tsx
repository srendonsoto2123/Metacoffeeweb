import { ReactNode } from "react";

interface Props {
   children: ReactNode;
}

export default function Parrafo({ children }: Props) {
   return (
      <p className="block text-justify px-4 lg:px-8 my-4">
         {children}
      </p>
   )
}
