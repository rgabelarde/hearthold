import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import React, { Component } from "react";
import { Image, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EStyleSheet from "react-native-extended-stylesheet";
import Orientation from "react-native-orientation";

import {
  ReflectionStackNavigator,
  CalendarStackNavigator,
  ProfileStackNavigator,
} from "./CustomNavigation";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 200);

export default class App extends Component {
  componentDidMount = () => {
    Orientation.addOrientationListener(() => Orientation.lockToPortrait());
  };

  render() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="ReflectionNav"
            component={ReflectionStackNavigator}
            options={{
              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    adjustsFontSizeToFit
                    style={
                      focused
                        ? styles.tabLabelFocused
                        : styles.tabLabelUnfocused
                    }
                  >
                    reflect
                  </Text>
                );
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require("./assets/icon_reflect_selected.png")
                        : require("./assets/icon_reflect_unselected.png")
                    }
                    style={styles.tabBarIcon}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="CalendarNav"
            component={CalendarStackNavigator}
            options={{
              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    adjustsFontSizeToFit
                    style={
                      focused
                        ? styles.tabLabelFocused
                        : styles.tabLabelUnfocused
                    }
                  >
                    overview
                  </Text>
                );
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require("./assets/icon_calendar_selected.png")
                        : require("./assets/icon_calendar_unselected.png")
                    }
                    style={styles.tabBarIcon}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="ProfileNav"
            component={ProfileStackNavigator}
            options={{
              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    adjustsFontSizeToFit
                    style={
                      focused
                        ? styles.tabLabelFocused
                        : styles.tabLabelUnfocused
                    }
                  >
                    profile
                  </Text>
                );
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require("./assets/icon_profile_selected.png")
                        : require("./assets/icon_profile_unselected.png")
                    }
                    style={styles.tabBarIcon}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDECD5",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    borderTopColor: "#959797",
    width: "100%",
    height: "auto",
    aspectRatio: 6.1 / 1.35,
    alignItems: "center",
    paddingTop: "20rem",
    paddingBottom: "23rem",
    borderTopLeftRadius: "22rem",
    borderTopRightRadius: "22rem",
    backgroundColor: "white",
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
  },
  tabLabelUnfocused: {
    fontFamily: "Avenir",
    fontSize: "12.7rem",
    color: "#202227",
  },
  tabLabelFocused: {
    fontFamily: "Avenir",
    fontSize: "12.7rem",
    color: "#F1404D",
  },
  tabBarIcon: {
    width: "80%",
    height: "auto",
    marginBottom: "15rem",
    aspectRatio: 26 / 7,
    resizeMode: "contain",
  },
});
