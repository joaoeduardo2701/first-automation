describe('Carrinho', () => {
  it('Adicionar um item ao carrinho com sucesso', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Act & Assert
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1').and('be.visible')

    cy.url().should('include', '/inventory.html')

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')

    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
})
