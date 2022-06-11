import { render, screen } from '@testing-library/react'
import Container from '../src/components/container'
import '@testing-library/jest-dom'

describe("Test para el componente container", () => {
   it("Renderizado del componente", () => {
      render( <Container>
         <h1>Prueba container</h1>
      </Container> )
      const contenedor = screen.getByRole("heading", {
         title: /Prueba container/i
      })
      expect(contenedor).toBeInTheDocument()
   })
})
