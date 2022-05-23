describe("Test para la pagina principal", () => {
  it("Carga imagenes", () => {
        cy.visit("/")
        cy.get("img").should("have.length", 30)
  })  

  it("Carga de los parrafos", () => {
        cy.get("p").should("have.length", 6)
  })

  it("Carga de los titulos", () => {
      cy.get("h2").should("have.length",13)
  })

  it("Carga miembros del equipo", ()=> {
      cy.get("#members").contains("Miembros del equipo")    
  }) 

  it("Carga nav", () => {
      cy.get("header").should("have.length", 1)
  })
})