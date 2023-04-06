const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

const { log } = console;

const { scriptStartLine, scriptEndLine, errorStartLine, errorEndLine } = require('./constants');

const setupFolder = (projectPath) => {
  log(scriptStartLine);
  log('');

  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      log('\x1b[31m%s\x1b[0m', errorStartLine);
      log(projectPath);
      log('\x1b[31m%s\x1b[0m',
      `🚨 The folder ${projectPath} already exist in the current directory, please give it another name.`
      );
    } else {
      log('\x1b[31m%s\x1b[0m', errorStartLine);
      log(error);
      log('\x1b[31m%s\x1b[0m', errorEndLine);
    }

    process.exit(1);
  }
};

const setupPackage = (projectName, projectPath) => {
  log('dependencies:');
  log('\x1b[32m%s\x1b[0m', '- Next.js');
  log('\x1b[32m%s\x1b[0m', '- React');
  log('\x1b[32m%s\x1b[0m', '- React-DOM');
  log('');

  log('devDependencies:');
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
  execSync(`git clone --depth 1 https://github.com/DavidYang2149/nextjs-starter ${projectName}`);

  if (projectName !== '.') {
    process.chdir(projectPath);
  }
  
  log('🥰 Download completed!');
  log('');

  log('🔥 Removing useless files:');
  fs.unlinkSync(path.join(projectPath, 'CONTRIBUTING.md'));
  fs.unlinkSync(path.join(projectPath, 'SECURITY.md'));
  fs.unlinkSync(path.join(projectPath, 'LICENSE'));
  fs.unlinkSync(path.join(projectPath, 'renovate.json'));
  
  fs.rmSync('./.git', { recursive: true });
  fs.rmSync('./.github', { recursive: true });
  fs.rmSync('./.husky', { recursive: true });
  fs.rmSync('./bin', { recursive: true });

  log('\x1b[36m%s\x1b[0m', 'Successfully installed!');
  log('');
};

const cleanPackage = () => {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
    
  log('🔥 Removing useless package.json setting');
  log('');

  delete packageJson.bin;
  delete packageJson.scripts.prepare;
  delete packageJson.dependencies.commander;
  delete packageJson.devDependencies.husky;
  
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
};

const pnpmSetupPackage = () => {
  exec('pnpm --version', (error) => {
    if (error) {
      log('pnpm is not installed.');
      log('\x1b[35m%s\x1b[0m', '🎉 Setting is done, ready to use. Please type "pnpm install". Happy coding!');
      process.exit(1);
    }

    exec('pnpm install', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        log('pnpm install failed.');
        log('\x1b[35m%s\x1b[0m', '🎉 Setting is done, ready to use. Please type "pnpm install". Happy coding!');
        process.exit(1);
      }

      if (stderr) {
        console.error(`Standard error: ${stderr}`);
        log('pnpm install failed.');
        log('\x1b[35m%s\x1b[0m', '🎉 Setting is done, ready to use. Please type "pnpm install". Happy coding!');
        process.exit(1);
      }
      
      console.log(`Standard output: ${stdout}`);
      log('\x1b[35m%s\x1b[0m', '🎉 Setting is done, ready to use. Happy coding!');
      log('');
      
      log(scriptEndLine);
      log('');
      
      fs.readFile('./package.json', 'utf8', (err, data) => {
        const { version } = JSON.parse(data);
        log(`🏷️ Version: ${version}`);
        log('');
      });
    });
  });
};

module.exports = {
  setupFolder, setupPackage,
  cleanPackage, pnpmSetupPackage,
};
