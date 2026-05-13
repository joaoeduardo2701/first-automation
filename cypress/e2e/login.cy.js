describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })

  it('Retornar erro com usuário bloqueado', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()


    cy.get('[data-test="error"]')
      .should(
        'contain.text', 
        'Epic sadface: Sorry, this user has been locked out.'
      )

    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
