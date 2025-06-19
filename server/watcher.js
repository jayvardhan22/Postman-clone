const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

let previousContent = {};

function readFileLines(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').split('\n');
  } catch {
    return null;
  }
}

function watchChanges(directory = './') {
  const watcher = chokidar.watch(directory, {
    ignored: /node_modules|\.git|watcher\.js/, 
    persistent: true
  });

  watcher.on('change', filePath => {
    const newLines = readFileLines(filePath);
    const oldLines = previousContent[filePath] || [];

    if (!newLines) return;

    const changedLines = [];

    const maxLines = Math.max(newLines.length, oldLines.length);
    for (let i = 0; i < maxLines; i++) {
      if (newLines[i] !== oldLines[i]) {
        changedLines.push({ line: i + 1, content: newLines[i] || '' });
      }
    }

    if (changedLines.length > 0) {
      console.log(`\n🔧 File changed: ${filePath}`);
      changedLines.forEach(change => {
        console.log(`➡️  Line ${change.line}: ${change.content.trim()}`);
      });
    }

    previousContent[filePath] = newLines;
  });

  watcher.on('add', filePath => {
    previousContent[filePath] = readFileLines(filePath);
  });

  console.log('👀 Watching for file changes...');
}

module.exports = { watchChanges };
