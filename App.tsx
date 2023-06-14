import React from "react";
import { Home } from "./src/screen/Home";
import { LogBox } from "react-native";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto";

// Ignore all warnings
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
}
