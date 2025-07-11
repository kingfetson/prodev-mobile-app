# 📱 Mobile Development Environment Setup

Welcome to the **Mobile App Development Setup** guide for the `prodev-mobile-app` series using **React Native** and **Expo**.

This environment supports rapid cross-platform mobile app development, with multiple modular projects organized for clarity and scalability.

---

## 🗂️ Directory Structure

mobile-development-setup/
├── README.md
├── prodev-mobile-app-0x00
├── prodev-mobile-app-0x01
├── prodev-mobile-app-0x02
├── prodev-mobile-app-0x03


Each `prodev-mobile-app-0x0X` is an independent React Native Expo project.

---

## 🛠️ Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- Git
- Expo CLI  
  Install via:

  npm install -g expo-cli
Optional:

Android Studio (for emulator)

Xcode (for iOS development on macOS)

Expo Go App (for real device testing)

🚀 Setup Instructions
1. Clone the repository (if applicable)

git clone https://github.com/kingfetson/mobile-development-setup.git

cd mobile-development-setup
2. Navigate to a specific project

cd prodev-mobile-app-0x02

3. Install dependencies

npm install
4. Start the Expo server
npm start
This will launch Expo Dev Tools in your browser.

📱 Run the App on Devices
Expo Go App (Recommended)
Scan the QR code from Expo Dev Tools on your physical device.

Android Emulator
Start the emulator via Android Studio, then run:
npm run android
iOS Simulator (macOS only)
Run:
npm run ios
🔁 Reset Project

If a project includes a reset script:

npm run reset-project
This will clean your workspace (custom logic in scripts/reset-project.js).

🧪 Project Commands
Command	Description
npm start	Start Expo bundler
npm run android	Open in Android Emulator
npm run ios	Open in iOS Simulator (macOS only)
npm run web	Open in a web browser
npm run lint	Run linter

📦 Common Structure Inside Each Project

prodev-mobile-app-0x0X/
├── app/
├── assets/
│   └── images/
├── styles/
├── components/
├── constants/
├── app.json
├── package.json
├── README.md

📘 Resources
React Native Docs

Expo Docs

VS Code Extensions for React Native

🙋 Support
For issues or help, open a GitHub Issue or contact the project maintainer.

Happy coding! 🚀