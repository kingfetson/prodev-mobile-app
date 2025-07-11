# 📱 prodev-mobile-app-0x01

> ALX Mobile Development – Entry Screen Project using **Expo Router** and **React Native**

This project sets up a simple mobile application screen using the Expo Router template. It displays styled messages using React Native's `View` and `Text` components with TypeScript support.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (LTS)
- Expo CLI: `npm install -g expo-cli`
- Expo Go app (on physical Android/iOS device) or web browser

### 📦 Installation

1. **Clone the repository**:
   
   git clone https://github.com/kingfet/prodev-mobile-setup.git
   cd prodev-mobile-setup/prodev-mobile-app-0x01
2. Install dependencies:
npm install
3. Start the app:
npx expo start
Press w to open in the browser

Or scan the QR code with Expo Go
🛠 App Structure
Modified File: app/index.tsx

Main Changes:

Text changed to: Entry Screen - Awesome

Added a View with 3 styled Text components
<View>
  <Text style={styles.largeText}>Typescript is great if you practice more</Text>
  <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
  <Text style={styles.smallText}>ALX is awesome</Text>
</View>
🎨 Styling
Defined using StyleSheet.create():
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
✅ Project Status
 Expo project scaffolded using with-router template

 Default screen removed

 index.tsx updated with custom layout and styles

👨‍💻 Author
Festus Kimani