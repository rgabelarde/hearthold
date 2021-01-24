// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

const DailyCheckinScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are on DailyCheckinScreen Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DailyCheckinScreen;
