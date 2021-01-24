import "react-native-gesture-handler";
import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EStyleSheet from "react-native-extended-stylesheet";
import Orientation from "react-native-orientation";

import ReflectionScreen from "./src/screens/ReflectionScreen";
import DailyCheckinScreen from "./src/screens/DailyCheckinScreen";
import AddTriggerScreen from "./src/screens/AddTriggerScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CalendarScreen from "./src/screens/CalendarScreen";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const Stack = createStackNavigator(); // creates object for Stack Navigator

const ReflectionStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* {" "}
      // contains all child component screens within a stack. */}
      <Stack.Screen name="ReflectionScreen" component={ReflectionScreen} />
      <Stack.Screen name="DailyCheckinScreen" component={DailyCheckinScreen} />
      <Stack.Screen name="AddTriggerScreen" component={AddTriggerScreen} />
    </Stack.Navigator>
  );
};

export { ReflectionStackNavigator }; // Stack-Navigator for ReflectionScreen Tab

const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export { CalendarStackNavigator }; // Stack-Navigator for CalendarScreen Tab

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export { ProfileStackNavigator }; // Stack-Navigator for UserScreen Tab
