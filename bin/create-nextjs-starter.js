#! /usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const { log } = console;

const errorStartLine = '========================= 🚨 E R R O R 🚨 =========================';
const errorEndLine = '=========================== 🚨 E N D 🚨 ===========================';

if (process.argv.length < 3) {
  log('\x1b[31m%s\x1b[0m', errorStartLine);
  log('\x1b[31m%s\x1b[0m', '🚨 Warning:');
  log('');
  log('Please specify the project directory:');
  log('\x1b[32m%s\x1b[0m', '@davidyang2149/nextjs-starter <project-directory>');
  log('');
  log('For example:');
  log('npx @davidyang2149/nextjs-starter my-nextjs-project');
  log('\x1b[31m%s\x1b[0m', errorEndLine);

  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPOSITORY = 'https://github.com/DavidYang2149/nextjs-starter';

const gitCloneOrderArray = ['git', 'clone', '--depth', '1', GIT_REPOSITORY, projectPath];
const gitCloneCommand = gitCloneOrderArray.map((item) => item.replace(/\s/g,'')).join(' ');

if (projectName !== '.') {
  try {
    fs.mkdirSync(projectPath);
  } catch (error) {
    if (error.code === 'EEXIST') {
      log('\x1b[31m%s\x1b[0m', errorStartLine);
      log(projectName);
      log('\x1b[31m%s\x1b[0m',
        `🚨 The folder ${projectName} already exist in the current directory, please give it another name.`
      );
      log('\x1b[31m%s\x1b[0m', errorEndLine);
    }

    log('\x1b[31m%s\x1b[0m', errorStartLine);
    log(error);
    log('\x1b[31m%s\x1b[0m', errorEndLine);

    process.exit(1);
  }
}

async function main() {
  try {
    log('========================= 🚀 S T A R T 🚀 =========================');
    log('Using npm.');
    log('');
    log('Installing dependencies:');
    log('\x1b[32m%s\x1b[0m', '- Next.js');
    log('\x1b[32m%s\x1b[0m', '- React');
    log('\x1b[32m%s\x1b[0m', '- React-DOM');
    log('');
    log('Installing devDependencies:');
    log('\x1b[32m%s\x1b[0m', '- TypeScript');
    log('\x1b[32m%s\x1b[0m', '- ESLint');
    log('\x1b[32m%s\x1b[0m', '- Jest');
    log('\x1b[32m%s\x1b[0m', '- Testing-Library');
    log('\x1b[32m%s\x1b[0m', '- Cypress');
    log('');
    log('⭐ Next.js Starter Kit ⭐');
    log('🥰 Create by davidyang2149');
    log('🚀 From https://github.com/DavidYang2149/nextjs-starter');
    log('');
    log(`🚀 Creating project ${projectName}...`);
    log('');
    log('🚚 Downloading files:');
    execSync(gitCloneCommand);
    
    if (projectName !== '.') {
      process.chdir(projectPath);
    }
    
    log('🥰 Download completed!');
    log('');

    try {
      fs.readFile('./package.json', 'utf8', (err, data) => {
        const { version } = JSON.parse(data);
        log(`🏷️ Version: ${version}`);
      });
    } catch (error) {
      log(error);
    }
    
    log('📦 Installing dependencies:');
    execSync('npm install');
    log('');
    log('🔥 Removing useless files:');
    execSync('npx rimraf ./.git');
    execSync(`npx rimraf ./.github`);
    execSync(`npx rimraf ./bin`);
    execSync(`npx rimraf ./LICENSE`);
    execSync(`npx rimraf ./SECURITY.md`);
    log('');
    log('\x1b[36m%s\x1b[0m', 'Successfully installed!');
    log('');
    log('\x1b[35m%s\x1b[0m', '🎉 The installation is done, ready to use. Happy coding!');
    log('========================= 🎉 E N D 🎉 =========================');
    log('');
  } catch (error) {
    log('\x1b[31m%s\x1b[0m', errorStartLine);
    log(error);
    log('\x1b[31m%s\x1b[0m', errorEndLine);
  }
}

main();
