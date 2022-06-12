import { ReactNode } from "react"

interface Props {
   children: ReactNode
}

export default function Cita({ children }: Props) {
   return (
      <strong className="block text-center">
         <em>
            {children}
         </em>
      </strong>
   )
}
