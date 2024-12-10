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
Open the script file finding-dep.js in your code editor.

Locate the following line and replace /your/project/path with the absolute path to the project you want to scan:

javascript
Copy code
      ```bash
      const projectPath = path.resolve('/your/project/path'); // Replace with your project path

Save the changes.

Run the script by executing the following command in the terminal:
Copy code
    ```bash
    node finding-dep.js
Example Output
After running the script, you’ll see a list of external dependencies used in your project. Example:

Copy code
    ```bash
    node finding-dep.js
    
Response
    ```bash
    Dependencies found: [ 'react', 'express', 'lodash', 'moment' ]


### Key Changes:
1. Proper formatting for code blocks (e.g., `bash` and `javascript`).
2. Fixed incomplete sections, like `Example Output`.
3. Ensured readability by aligning indentation and removing redundant `Copy code` lines.

This version is ready for your `README.md`!
