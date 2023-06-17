import React from "react";
import AppRoutes from "./src/routes/app.routes";
import { LogBox } from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { AnimateProvider } from "./src/context/Animate";

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

  const composeProviders =
    (
      ...providers: {
        ({ children }: any): JSX.Element;
      }[]
    ) =>
    (props: { children: any }) =>
      providers.reduceRight(
        (children, Provider) => <Provider {...props}>{children}</Provider>,
        props.children
      );

  const AllProviders = composeProviders(AnimateProvider);

  return (
    <AllProviders>
      <NavigationContainer>
        <NativeBaseProvider>
          <StatusBar barStyle="dark-content" />
          <AppRoutes />
        </NativeBaseProvider>
      </NavigationContainer>
    </AllProviders>
  );
}
