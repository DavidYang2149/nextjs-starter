#!/usr/bin/env node
const path = require('path');
const { program } = require('commander');

const { setupFolder, setupPackage, cleanPackage, pnpmSetupPackage } = require('./validator');

program
  .arguments('<projectname>', 'Project name')
  .action((projectname) => {
    const currentPath = process.cwd();
    const projectPath = path.join(currentPath, projectname);

    setupFolder(projectPath);
    setupPackage(projectname, projectPath);

    cleanPackage();
    pnpmSetupPackage();
  });

program.parse(process.argv);
