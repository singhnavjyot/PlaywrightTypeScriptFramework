# Playwright-Automation

For detailed documentation of Playwright and its related API references go here https://playwright.dev/docs/intro

The tests are written in `Typescript` and project has the below files and folders:


- `tests` - All of the tests goes here
- `actions` - The place to define the test components or user actions using the page-object pattern. `ui.actions` file should contain all the ui interactions and the `api.actions` file should contain all the api actions needed for tests
- `utils/config.ts` - To support different configs for running tests in different evironments
- `playwright.config.ts` - Contains all the basic configurations for Playwright including report generation, tracing etc

## Installation

- Install node

```
https://nodejs.org/en/
```

- Install yarn

```
https://classic.yarnpkg.com/en/docs/install
```

## Environment Setup

- Run yarn to install the node packages

```
yarn
```

## Test Execution - Test will by default run on all browsers

npx playwright test

## To Run on specific browser

npx playwright test --project=chromium

## To Run Test in Headed Mode and generate html Report 

npx playwright test --headed --reporter=html

## We can also run specific Test file

 npx playwright test tests/ui.spec.ts