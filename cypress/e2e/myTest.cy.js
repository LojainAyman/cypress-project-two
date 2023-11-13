/// <reference types= "cypress" />

Cypress.Commands.add("loginforTheUser",(username,password)=>{

  cy.visit('https://www.saucedemo.com/v1/index.html')

  cy.get('[data-test="username"]').type(username)

  cy.get('[data-test="password"]').type(password)

  cy.get('#login-button').click()


})

Cypress.Commands.add("add_to_cart", (number_of_items) => {
  for(let i = 0 ; i<number_of_items ; i++){

    cy.get('.btn_inventory').eq(i).click()

  }


});
describe('swag lab', () => {
  it('add all item to the cart', () => {
    cy.loginforTheUser("standard_user","secret_sauce")
cy.wait(1000)
    cy.add_to_cart(5);
    cy.wait(1000)

    cy.get('.shopping_cart_badge').click()
    cy.wait(1000)

    cy.get('.btn_action').click()
    cy.wait(1000)

    cy.get('[data-test="firstName"]').type("ahmad")
    cy.get('[data-test="lastName"]').type("ali")
    cy.get('[data-test="postalCode"]').type("123")
    cy.wait(1000)

    cy.get('.btn_primary').click()
    cy.wait(1000)

    cy.get('.btn_action').click()

    cy.get('.complete-header').invoke('text').should('contain', "THANK YOU FOR YOUR ORDER")
  })
})