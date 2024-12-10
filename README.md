# Dependency Finder

This project contains a script to scan your JavaScript/TypeScript files and identify external dependencies. It recursively scans all `.js`, `.ts`, `.jsx`, and `.tsx` files in your project directory, extracts the `import` or `require` statements, and lists all external dependencies.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js.

## Installation

1. Clone or download this repository to your local machine.
2. Open a terminal and navigate to the project folder.
3. Run the following command to install required dependencies (if any):

   ```bash
   npm install
   
## Usage

1. Open the script file `finding-dep.js` in your code editor.
2. Locate the following line and replace `/your/project/path` with the absolute path to the project you want to scan:

   ```javascript
   const projectPath = path.resolve('/your/project/path'); // Replace with your project path

3. Save the changes.
4. Run the script by executing the following command in the terminal:

   ```bash
   node finding-dep.js

##Example Output

   ```bash
   Dependencies found: [ 'react', 'express', 'lodash', 'moment' ]
