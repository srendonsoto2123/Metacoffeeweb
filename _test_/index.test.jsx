import {render , screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe ('Home', () =>{
    it('Renderizar el titulo de la primer section', ()=>{
        render(<Home />)
        const titulo = screen.getByRole("heading", {
            name: /un poco de historia/i
        })
        expect(titulo).toBeInTheDocument()
    })

    it("Renderizar el titulo de la segunda sección", () => {
        render(<Home />)
        const titulo_seccion_2 = screen.getByRole("heading", {
            name: /¡Bienvenido a Metacoffeecoin!/i
        })
        expect(titulo_seccion_2).toBeInTheDocument()
    })
})
