import { ReactNode } from "react"

interface Props {
   children: ReactNode
}

export default function Cita({ children }: Props) {
   return (
      <strong className="text-justify">
         <em>
            {children}
         </em>
      </strong>
   )
}
