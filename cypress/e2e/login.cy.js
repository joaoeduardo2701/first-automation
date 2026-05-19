describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.screenshot('login-success')

    cy.url().should('include', '/inventory.html')
  })

  it('Retornar erro ao logar com usuário inexistente', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('user_invalid')
    cy.get('[data-test="password"]').type('12345678')
    cy.get('[data-test="login-button"]').click()


    cy.get('[data-test="error"]')
      .should(
        'contain.text', 
        'Username and password do not match any user in this service'
      )

    cy.screenshot('login-invalid-user')

    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('Retornar erro ao logar com senha incorreta', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should(
        'contain.text', 
        'Username and password do not match any user in this service'
      )

    cy.screenshot('login-invalid-password')
    
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
