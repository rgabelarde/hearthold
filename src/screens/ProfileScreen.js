// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { Component } from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class ProfileScreen extends Component {
  state = {
    quote: "",
    quoteAuthor: "",
  };

  componentDidMount() {
    var rand = 0;
    var handle = setInterval(function () {
      rand = Math.floor(Math.random() * 4);
      // console.log("new random number is: " + rand);
    }, 1000 * 60 * 60 * 24);

    axios.get("https://type.fit/api/quotes").then((res) => {
      const quoteInfo = res.data[handle];
      this.setState({ quote: quoteInfo.text, quoteAuthor: quoteInfo.author });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.hello}>hello there,</Text>
          <Text style={styles.youText}>you.</Text>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text style={styles.quoteIntro}>
              {" "}
              Keep going, here is a motivational quote:
            </Text>
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteText}>{this.state.quote}</Text>
              <Text style={styles.quoteAuthorText}>
                - {this.state.quoteAuthor}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default ProfileScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCE6",
  },
  header: {
    width: "100%",
    height: "auto",
    aspectRatio: 9 / 4.5,
    backgroundColor: "rgba(241, 64, 77, 0.65)",
    borderBottomRightRadius: "800rem",
    justifyContent: "center",
    resizeMode: "contain",
    padding: "30rem",
  },
  hello: {
    fontFamily: "Avenir",
    color: "#FFFFFF",
    fontSize: "45rem",
    marginTop: "22rem",
  },
  youText: {
    fontFamily: "Avenir",
    color: "#FFFFFF",
    fontSize: "45rem",
    marginTop: "-20rem",
  },
  quoteContainer: {
    position: "relative",
    marginTop: "25rem",
    padding: "15rem",
    width: "90%",
    height: "auto",
    backgroundColor: "rgba(252, 255, 255, 0.6)",
    borderRadius: "11rem",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 1,
    resizeMode: "contain",
    flexWrap: "wrap",
    alignSelf: "center",
    flexDirection: "row",
  },
  quoteText: {
    fontSize: "20rem",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
  },
  quoteAuthorText: {
    fontSize: "20rem",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
    fontStyle: "italic",
  },
  quoteIntro: {
    marginTop: "30rem",
    marginBottom: "-10rem",
    paddingLeft: "30rem",
    fontSize: "16rem",
    fontFamily: "Avenir",
  },
});
