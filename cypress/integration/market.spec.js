describe("Tests de navegación para el dashboard", () => {
   it("Visitar la página principal", () => {
      cy.visit("/dashboard")
      cy.contains("Dashboard")
   })

   it("Visitar la información del usuario", () => {
      cy.contains("Perfil").click()
      cy.url().should("include","/userinfo")
   })

   it("Visitar las transacciones del usuario", () => {
      cy.contains("Transacciones").click()
      cy.url().should("include", "/transacciones")
   })
}) 
