# Workflow Course Assignment

This project is part of the workflow cours assignment. It showcases the use of SASS for styling, along with a robust testing setup using Jest and Cypress for unit and end-to-end testing, respectively.


## Getting Started

### Dependencies

- Node.js and npm must be installed on your system.
- This project uses SASS for styling, ESLint for linting, Prettier for code formatting, and Husky for managing Git hooks.
- For testing, Jest is used for unit tests, and Cypress for end-to-end testing.

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the required dependencies.

### Running the Project

- To start the project with live reloading and SASS watching
```bash
    npm run start
```

- To build the CSS from SASS, run:
```bash
    npm run build
```

## Scripts
```bash
    npm run build
    npm start
    npm run format
    npm run lint
    npm run lint-fix
    npm run prepare
    npm test
    npm run test-unit
    npm run test-e2e
    npm run test-e2e-report
    npm run test-e2e-cli
```

## Tests

This project includes both unit and end-to-end tests:

- **Unit Tests**: Located in src/tests, run with Jest.
- **End-to-End Tests**: Three Cypress tests located in cypress/e2e/auth-test.

To run the unit tests, use:
```bash
    npm test
```

For end-to-end tests, you can either open the Cypress Test Runner with:
```bash
    npm run test-e2e
```

or
```bash
    npm run test-e2e-cli
```

