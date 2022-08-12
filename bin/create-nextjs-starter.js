#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

const { log } = console;

const { version } = require('./constants');
const { setupFolder, setupPackage } = require('./validator');

program
  .version(version, '-v --version')
  .arguments('<projectname>', 'Project name')
  .action((projectname) => {
    const currentPath = process.cwd();
    const projectPath = path.join(currentPath, projectname);

    setupFolder(projectPath);
    setupPackage(projectname, projectPath, version);
  });

program.parse(process.argv);
