import { render, screen } from '@testing-library/react'
import AppLink from 'src/components/appLink'
import '@testing-library/jest-dom'

describe( 'Test automatizados para el componente appLink', () => {
   it( 'Renderizado del componente', () => {
      render( <AppLink href="/dashboard">Ir al dashboard</AppLink> )
      const titulo = screen.getByRole("link", {
         href: /dashboard/i
      })
      expect(titulo).toBeInTheDocument()
   } )
} )
