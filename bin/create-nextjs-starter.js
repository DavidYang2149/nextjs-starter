#! /usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("Using npm.");
  console.log("");
  console.log("Installing dependencies:");
  console.log("\x1b[32m%s\x1b[0m", "- react");
  console.log("\x1b[32m%s\x1b[0m", "- react-dom");
  console.log("\x1b[32m%s\x1b[0m", "- next");
  console.log("");
  console.log("Installing devDependencies:");
  console.log("\x1b[32m%s\x1b[0m", "- eslint");
  console.log("\x1b[32m%s\x1b[0m", "- jest");
  console.log("\x1b[32m%s\x1b[0m", "- cypress");
  console.log("\x1b[32m%s\x1b[0m", "- typescript");
  console.log("");
  console.log("\x1b[36m%s\x1b[0m", "Successfully installed!");
  console.log("");
  console.log("⭐ Next.js Starter Kit ⭐");
  console.log("🥰 Create by davidyang2149");
  console.log("🚀 From https://github.com/DavidYang2149/nextjs-starter");
  console.log("");

  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPOSITORY = "https://github.com/DavidYang2149/nextjs-starter";

if (projectName !== ".") {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(projectName);
      console.log("\x1b[31m%s\x1b[0m",
        `🚨 The folder ${projectName} already exist in the current directory, please give it another name.`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log("========================= 🚀 S T A R T 🚀 =========================");
    console.log(`🚀 Creating project ${projectName}...`);
    console.log("");
    console.log("🚚 Downloading files:");
    execSync(`git clone --depth 1 ${GIT_REPOSITORY} ${projectPath}`);
    
    if (projectName !== ".") {
      process.chdir(projectPath);
    }
    
    console.log("");
    console.log("📦 Installing dependencies:");
    execSync("npm install");
    console.log("");
    console.log("🔥 Removing useless files:");
    execSync("npx rimraf ./.git");
    console.log("");
    console.log("\x1b[35m%s\x1b[0m", "🎉 The installation is done, ready to use. Happy coding!");
    console.log("========================= 🎉 E N D 🎉 =========================");
  } catch (error) {
    console.log(error);
  }
}

main();
