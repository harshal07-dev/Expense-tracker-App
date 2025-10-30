import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Insights from "../screens/Insights";
// import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Insights" component={Insights} />
    </Tab.Navigator>
  );
}
export default function AppNavigator() {
  // stack screen
  // inside the stack screen - call out of bottom tabs  as one of the screens
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={MyTabs} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
}
