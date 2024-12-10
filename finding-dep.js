const fs = require('fs');
const path = require('path');

// Define the project path
const projectPath = path.resolve('/your/project/path'); // Replace with your project path

// Define the file extensions to look for
const extensions = ['.js', '.ts', '.jsx', '.tsx'];

/**
 * Recursively gets all files with specified extensions from a directory.
 * @param {string} dir - The directory path.
 * @returns {string[]} List of file paths.
 */
function getFiles(dir) {
    let files = [];

    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            // If it's a directory, recursively get files
            files = files.concat(getFiles(fullPath));
        } else if (extensions.includes(path.extname(file))) {
            // If the file matches the extension, add it to the list
            files.push(fullPath);
        }
    });

    return files;
}

/**
 * Extracts and lists all external dependencies from the given files.
 * @param {string[]} files - List of file paths.
 * @returns {string[]} List of unique dependencies.
 */
function findDependencies(files) {
    const dependencies = new Set();
    const importRegex = /(?:require\(['"]([^'"]+)['"]\)|import\s.+?from\s['"]([^'"]+)['"])/g;

    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf-8');
        let match;

        while ((match = importRegex.exec(content))) {
            const dependency = match[1] || match[2];
            // Add the main package name if it's an external dependency
            if (dependency && !dependency.startsWith('.') && !dependency.startsWith('/')) {
                dependencies.add(dependency.split('/')[0]);
            }
        }
    });

    return Array.from(dependencies);
}

// Get all files in the project directory
const files = getFiles(projectPath);

// Find dependencies from the files
const dependencies = findDependencies(files);

// Log the found dependencies
console.log('Dependencies found:', dependencies);
