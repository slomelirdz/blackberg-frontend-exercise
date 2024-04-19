# blackberg-frontend-exercise

This repository contains the front end development exercise for a landing page using the U.S. Web Design System (USWDS).
View the live demo here: [Demo](https://blackberg-frontend-exercise-sandra-lomeli.vercel.app/)

## Getting Started

This guide will provide you with the necessary steps to run this project on your local machine.


## Prerequisites

Before proceeding with the installation, ensure you have the following prerequisites:

- [Node.js (v18.16.1 or higher) and npm(v9.5.1 or higher)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


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

5. Once the development server is running, open your web browser and navigate to [http://localhost:3000/](http://localhost:3000/) (or the port specified by your environment variable) to view the application.

## Development

This project uses `uswds-compile` for copying USWDS static assets and transforming USWDS Sass into browser-readable CSS.

* Run `npx gulp watch` during development to watch changes in the `./sass` directory.

* :exclamation: **This is an important note!** It's not recommended to run `npx gulp init` because it will update the `uswds.paths.dist.theme` and result in the loss of any custom changes.


## Built With

* [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/how-to-use-uswds/)


## Author

* **Sandra Lomeli** - [www.sandralomeli.com](https://www.sandralomeli.com)



