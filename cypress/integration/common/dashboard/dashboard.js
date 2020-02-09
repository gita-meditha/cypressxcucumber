import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(`I see the dashboard backoffice message {string}`, message => {
  cy.contains(message)
})
