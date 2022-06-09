import {render , screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe ('Renderizar componentes del index', () =>{
    it('Renderizar las imagenes', ()=>{
        render(<Home />)
        screen.findAllByRole("img")
    })
    it('Renderizar los parrafos', ()=>{
        render(<Home />)
        screen.findAllByRole("p")
    })
    it('Renderizar el nav', ()=>{
        render(<Home />)
        screen.findAllByRole("header")
    })
    it('Renderizar los miembros', ()=>{
        render(<Home />)
        screen.findAllByRole("#members")
    })
})