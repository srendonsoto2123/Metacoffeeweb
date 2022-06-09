import {render , screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe ('Renderizar titulos index', () =>{
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

    it("Renderizar el titulo de la tercera sección", () => {
        render(<Home />)
        const titulo_seccion_3 = screen.getByRole("heading", {
            name: /Juega y gana/i
        })
        expect(titulo_seccion_3).toBeInTheDocument()
    })

    it("Renderizar el titulo de la cuarta sección", () => {
        render(<Home />)
        const titulo_seccion_4 = screen.getByRole("heading", {
            name: /¿Cómo jugar?/i
        })
        expect(titulo_seccion_4).toBeInTheDocument()
    })

    it("Renderizar el titulo de la quinta sección", () => {
        render(<Home />)
        const titulo_seccion_5 = screen.getByRole("heading", {
            name: /Miembros del equipo/i
        })
        expect(titulo_seccion_5).toBeInTheDocument()
    })
})
