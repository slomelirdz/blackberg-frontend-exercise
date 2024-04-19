# blackberg-frontend-exercise

## Getting Started

This guide will provide you with the necessary steps to run this project on your local machine.


## Prerequisites

- [Node.js (v18.16.1 or higher) and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


## Installation

1. Clone the repository to your local machine
```bash
git clone https://github.com/slomelirdz/blackberg-frontend-exercise.git
```

2. Navigate to the project directory
```bash
cd blackberg-frontend-exercise
```

3. Install the project dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

## Development

This project uses `uswds-compile` for copying USWDS static assets and transforming USWDS Sass into browser-readable CSS.

* Run `npx gulp watch` during development to watch changes in the `./sass` directory.

* :exclamation: **This is an important note!** It's not recommended to run `npx gulp init` because it will update the `uswds.paths.dist.theme` and result in the loss of any custom changes.


## Built With

* [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/how-to-use-uswds/)


## Author

* **Sandra Lomeli** - [www.sandralomeli.com](https://www.sandralomeli.com)



