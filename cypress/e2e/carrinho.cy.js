describe('Carrinho', () => {
  it('Adicionar um item do carrinho com sucesso', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Act & Assert
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.screenshot('add-to-cart')

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1').and('be.visible')

    cy.url().should('include', '/inventory.html')

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.url().should('include', '/cart.html')

    cy.contains('Sauce Labs Backpack').should('be.visible')
  })

  it('Remover um item do carrinho com sucesso', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('be.visible')
  
    // Act 

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Assert

    cy.get('.shopping_cart_badge')
      .should('not.exist')

    cy.screenshot('removed-from-cart')
  })
})
