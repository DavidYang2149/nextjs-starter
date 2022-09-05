#!/usr/bin/env node
const path = require('path');
const { program } = require('commander');

const { setupFolder, setupPackage } = require('./validator');

program
  .arguments('<projectname>', 'Project name')
  .action((projectname) => {
    const currentPath = process.cwd();
    const projectPath = path.join(currentPath, projectname);

    setupFolder(projectPath);
    setupPackage(projectname, projectPath);
  });

program.parse(process.argv);
