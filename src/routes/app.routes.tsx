import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import fonts from "../utils/fonts";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
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
        }}
      />
    </Stack.Navigator>
  );
}
