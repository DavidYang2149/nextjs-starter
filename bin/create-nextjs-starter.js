#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

const { log } = console;

const { version } = require('./constants');
const { setupFolder, setupPackage } = require('./validator');

program
  .version(version, '-v --version')
  .name('@davidyang2149/nextjs-starter');

program
  .command('<project_name>')
  .description('Initialize project')
  .action((projectName, options) => {
    const currentPath = process.cwd();
    const projectPath = path.join(currentPath, projectName);

    setupFolder(projectPath);
    setupPackage(projectName, projectPath, version);
  });

program.parse(process.argv);
