import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps'

const data = require('../../../fixtures/data.json')
const response = require('../../../fixtures/response_status_code.json')

const emailField = 'input[data-testid="email"]'
const passwordField = 'input[data-testid="password"]'
const buttonLogin = 'button[data-testid="submit-button"]'
const errorMessage = 'p[data-testid="error-msg"]'

Given(`I go to page {string}`, url => {
  cy.visit(url)
})
Given(`I go to page backoffice login`, () => {
  cy.visit(Cypress.env('host'))
})
Then(`I see {string} in the title`, title => {
  cy.title().should('include', title)
  cy.log(Cypress.env('host'))
})
Then(`I fill in email field using {string}`, email => {
  cy.get(emailField).type(email)
})
Then(`I fill in password field using {string}`, password => {
  cy.get(passwordField).type(password)
})
When(`I click button login`, () => {
  cy.server()
  cy.route('POST', '/auth/v1/login').as('login')
  cy.get(buttonLogin).click()
  cy.wait('@login')
  cy.get('@login').then(function(xhr) {
    expect(xhr.method).to.eq('POST')
    cy.log(xhr.status)
  })
})
Then(`I see the error message {string}`, message => {
  cy.get(errorMessage).should(element => {
    expect(element.text()).to.contain(message)
  })
})
Then(`I login using admin account`, () => {
  cy.get(emailField).type(data.emailAdmin)
  cy.get(passwordField).type(data.passwordAdmin)
  cy.server()
  cy.route('POST', '/auth/v1/login').as('login')
  cy.get(buttonLogin).click()
  cy.wait('@login')
  cy.get('@login').then(function(xhr) {
    expect(xhr.method).to.eq('POST')
    if (xhr.status === response.successOk) {
      expect(xhr.status).to.eq(response.successOk)
    } else {
      assert.isNotNull(xhr.response.body.error, 'record not found')
    }
  })
})
