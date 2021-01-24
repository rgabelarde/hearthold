// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Calendar
        style={styles.calendarStyle}
        theme={{
          backgroundColor: "transparent",
          calendarBackground: "transparent",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "#F1404D",
          todayTextColor: "#F1404D",
          dayTextColor: "#2d4150",
          textDisabledColor: "#BDCCC7",
          // dotColor: "#00adf5",
          // selectedDotColor: "#ffffff",
          indicatorColor: "blue",
          arrowColor: "grey",
          disabledArrowColor: "#d9e1e8",
          textDayFontFamily: "Avenir",
          textDayFontSize: 17,
          textMonthFontFamily: "Avenir",
          textMonthFontSize: 20,
          textDayHeaderFontFamily: "Avenir",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
        }}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"MMMM yyyy"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => <Arrow />}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={7}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </View>
  );
};
export default CalendarScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCE6",
  },
  calendarStyle: {
    marginTop: "50rem",
    borderWidth: 1,
    borderColor: "transparent",
    width: "100%",
    height: "auto",
    aspectRatio: 9 / 10,
    paddingBottom: "20rem",
  },
});
