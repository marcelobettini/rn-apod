import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
