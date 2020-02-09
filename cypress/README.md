[![](https://img.shields.io/badge/cypress-4.0.1-lightgrey)](https://www.cypress.io/) [![](https://img.shields.io/badge/cypress--cucumber--preprocessor-2.0.1-brightgreen)](https://www.npmjs.com/package/cypress-cucumber-preprocessor) [![](https://img.shields.io/badge/multiple--cucumber--html--reporter-1.13.2-yellowgreen)](https://www.npmjs.com/package/multiple-cucumber-html-reporter)

![](https://learndevtestops.files.wordpress.com/2019/09/picture1.png)

# WEB UI Automation Testing

## Cypress x Cucumber

> Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications. [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#What-you%E2%80%99ll-learn)

> Cucumber, define the feature files with all your stakeholders using Behavior-Driven Development (BDD). Automatically create documentation that’s up to date and easily shareable. [Cucumber.io](https://cucumber.io/)

#### Table of contents
* [Get started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installing](#installing)
* [Set up cypress.env](#set-up-cypressenv)
* [Running the tests](#running-the-tests)
* [More Details](https://github.com/damarmustiko/cypressxcucumber/tree/master/docs)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them
1. Clone this project
2. Install Node.js and npm, we will use npm to install (or yarn)
3. Install Cypress desktop [Download](https://cdn.cypress.io/desktop/4.0.1/darwin-x64/cypress.zip), and for windows, you can explore
4. Use VSCode for writing the code

### Installing

A step by step series of examples that tell you how to get a development automation testing

Install package.json

```
npm install
```

or

```
yarn install
```
actually using yarn is recommended (parallel process, install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable))

## Set up cypress.env
```
cp cypress.env.json.example cypress.env.json
```
and then edit, for where automation test can be running
```json
{
    "host": "https://xxx",
    "api_server": "https://xxx"
}
```

## Running the tests
How to run the automated tests for this system

```
npm run cypress -- -e TAGS=''
npm run cypress -- -e TAGS='@loginTest'
npm run cypress -- -e TAGS='not @registerTest and (@searchTest or @forgotPasswordTest)'
```
> For more details and examples "cypress-tags" please take a look to the example repo [cypress-cucumber-example](https://github.com/TheBrainFamily/cypress-cucumber-example)

> Default browser using headless browser (Electron)

> You can launch the browser with adding command --browser chrome

```
npm run cypress -- -e TAGS='@loginTest' --browser chrome
```
