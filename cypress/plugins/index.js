// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  // currentEnv = config.env.test_env
  // let newEnv = {}

  // switch (currentEnv) {
  //   case 'dev':
  //     newEnv = require('../../cypress/data/cypress.development.json')
  //     break
  //   case 'stg':
  //     newEnv = require('../../cypress/data/cypress.staging.json')
  //     break
  //   case 'prd':
  //     newEnv = require('../../cypress/data/cypress.production.json')
  //     break
  //   default:
  //     newEnv = require('../../cypress/data/cypress.development.json')
  // }

  // return {
  //   ...config,
  //   env: newEnv
  // }
}