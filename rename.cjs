const fs = require('fs');
const path = require('path');

const directoriesToScan = [
    'app',
    'public',
    'styles',
    'docs',
    'scripts'
];

const filesToScan = [
    'package.json',
    'README.md',
    'PROJECT.md',
    'FAQ.md',
    'CONTRIBUTING.md',
    'CHANGES.md',
    'Dockerfile',
    'docker-compose.yaml',
    'electron-builder.yml',
    'electron-update.yml',
    'uno.config.ts',
    'vite.config.ts',
    'vite-electron.config.ts'
];

function replaceInFile(filepath) {
    try {
        const content = fs.readFileSync(filepath, 'utf8');

        // specific replacements
        let newContent = content.replace(/bolt\.diy/g, 'auricyn');
        newContent = newContent.replace(/bolt\.new/g, 'auricyn.new');
        newContent = newContent.replace(/Bolt\.new/g, 'Auricyn.new');
        newContent = newContent.replace(/Bolt\.DIY/g, 'Auricyn');
        newContent = newContent.replace(/Bolt\.diy/g, 'Auricyn');

        // general replacements
        newContent = newContent.replace(/bolt/g, 'auricyn');
        newContent = newContent.replace(/Bolt/g, 'Auricyn');
        newContent = newContent.replace(/BOLT/g, 'AURICYN');

        if (newContent !== content) {
            fs.writeFileSync(filepath, newContent, 'utf8');
            console.log(`Updated ${filepath}`);
        }
    } catch (e) {
        console.error(`Skipping ${filepath}: ${e.message}`);
    }
}

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (let entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.bolt') continue;

        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile()) {
            if (/\.(ts|tsx|js|jsx|json|md|html|css|scss|sh|yml|yaml|svg)$/.test(entry.name)) {
                replaceInFile(fullPath);
            }
        }
    }
}

function main() {
    const baseDir = "c:\\Users\\hp\\Downloads\\bolt.diy-main\\bolt.diy-main";

    for (let file of filesToScan) {
        const filePath = path.join(baseDir, file);
        if (fs.existsSync(filePath)) {
            replaceInFile(filePath);
        }
    }

    for (let directory of directoriesToScan) {
        const dirPath = path.join(baseDir, directory);
        processDirectory(dirPath);
    }

    console.log("Renaming complete.");
}

main();
