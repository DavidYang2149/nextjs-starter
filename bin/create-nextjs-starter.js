#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

const { log } = console;

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
