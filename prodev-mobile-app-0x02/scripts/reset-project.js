const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// List of files to delete
const filesToDelete = [
  "app/index.tsx",
  "app/_layout.tsx",
  "constants/Colors.ts",
];

// Delete each file if it exists
filesToDelete.forEach((relativePath) => {
  const filePath = path.join(__dirname, "..", relativePath);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ Deleted: ${relativePath}`);
  } else {
    console.log(`⚠️ Not found (skipped): ${relativePath}`);
  }
});

// Optionally delete directories (e.g. 'components')
// const dirsToDelete = ["components"];
// dirsToDelete.forEach((dir) => {
//   const fullDirPath = path.join(__dirname, "..", dir);
//   if (fs.existsSync(fullDirPath)) {
//     fs.rmSync(fullDirPath, { recursive: true, force: true });
//     console.log(`🧹 Directory deleted: ${dir}`);
//   }
// });

// Clear Expo cache and restart
console.log("\n🚀 Restarting Expo with cache cleared...\n");
execSync("npx expo start --clear", { stdio: "inherit" });
