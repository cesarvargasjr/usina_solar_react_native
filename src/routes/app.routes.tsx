import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity } from "react-native";
import { History } from "../screen/History";
import { Home } from "../screen/Home";
import fonts from "../utils/fonts";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const navigation: any = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.black,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 21,
          fontFamily: fonts.semiBold,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Energia Solar",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("History")}
              style={{
                backgroundColor: colors.green,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.semiBold,
                  color: colors.white,
                  fontSize: 16,
                }}
              >
                Histórico
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: "Histórico",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
