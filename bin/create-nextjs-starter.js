#! /usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("⭐ ⭐ ⭐ Next.js Starter Kit ⭐ ⭐ ⭐");
  console.log("🥰 🥰 🥰 Create by davidyang2149 🥰 🥰 🥰");
  console.log("🌐 🌐 🌐 https://github.com/DavidYang2149/nextjs-starter 🌐 🌐 🌐");
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
      console.log(
        `🚨 The folder ${projectName} already exist in the current directory, please give it another name. 🚨`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log(`🚀 🚀 🚀 🚀 🚀 Creating project ${projectName}... 🚀 🚀 🚀 🚀 🚀 `);
    console.log("⭐ ⭐ ⭐ ⭐ ⭐ Next.js Starter Kit ⭐ ⭐ ⭐ ⭐ ⭐");
    console.log("🥰 🥰 🥰 🥰 🥰 Create by davidyang2149 🥰 🥰 🥰 🥰 🥰");
    console.log("🌐 🌐 🌐 🌐 🌐 https://github.com/DavidYang2149/nextjs-starter 🌐 🌐 🌐 🌐 🌐");
    console.log("========================= 🚀 S T A R T 🚀 =========================");
    console.log("🚚 🚚 🚚 🚚 🚚 Downloading files... 🚚 🚚 🚚 🚚 🚚");
    execSync(`git clone --depth 1 ${GIT_REPOSITORY} ${projectPath}`);

    if (projectName !== ".") {
      process.chdir(projectPath);
    }

    console.log("📦 📦 📦 📦 📦 Installing dependencies... 📦 📦 📦 📦 📦");
    execSync("npm install");

    console.log("🔥 🔥 🔥 🔥 🔥 Removing useless files... 🔥 🔥 🔥 🔥 🔥");
    execSync("npx rimraf ./.git");

    console.log("🎉 🎉 🎉 🎉 🎉 The installation is done, ready to use. Happy coding! 🎉 🎉 🎉 🎉 🎉");
    console.log("========================= 🎉 E N D 🎉 =========================");
  } catch (error) {
    console.log(error);
  }
}

main();
