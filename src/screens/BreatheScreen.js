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
    poemContent: "",
    poemAuthor: "",
    poemTitle: "",
  };

  componentDidMount() {
    var rand = 0;
    var handle = setInterval(function () {
      rand = Math.floor(Math.random() * 4);
      // console.log("new random number is: " + rand);
    }, 1000 * 60 * 60 * 24);
    var oneOrZero = Math.random() >= 0.5 ? 1 : 0;

    axios.get("https://type.fit/api/quotes").then((res) => {
      const quoteInfo = res.data[handle];
      this.setState({ quote: quoteInfo.text, quoteAuthor: quoteInfo.author });
    });
    axios.get("https://www.poemist.com/api/v1/randompoems").then((res) => {
      const randomPoem = res.data[oneOrZero];
      this.setState({
        poemContent: randomPoem.content,
        poemAuthor: randomPoem.poet.name,
        poemTitle: randomPoem.title,
      });
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
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            contentInset={{ bottom: 80 }}
          >
            <View>
              <Text style={styles.breatherIntro}>Keep Going, </Text>
              <Text style={styles.breatherInstruction}>
                here's a motivational quote:
              </Text>
              <View style={styles.quoteContainer}>
                <Text style={styles.breatherContent}>{this.state.quote}</Text>
                <Text style={styles.breatherAuthor}>
                  - {this.state.quoteAuthor}
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={styles.breatherIntro}>Take a breather; </Text>
              <Text style={styles.breatherInstruction}>
                read a poem to calm your mind:
              </Text>
              <View style={styles.quoteContainer}>
                <Text style={styles.poemTitle}>
                  {this.state.poemTitle} {"\n"}
                </Text>
                <Text style={styles.breatherContent}>
                  {this.state.poemContent}
                  {"\n"}
                </Text>
                <Text style={styles.breatherAuthor}>- {this.state.poemAuthor}</Text>
              </View>
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
  contentContainer: {
    paddingBottom: "40rem",
    flexGrow: 1,
  },
  header: {
    width: "100%",
    height: "auto",
    aspectRatio: 9 / 4.5,
    backgroundColor: "rgba(247, 66, 79, 0.6)",
    borderBottomRightRadius: "800rem",
    justifyContent: "center",
    resizeMode: "contain",
    padding: "30rem",
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
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
    backgroundColor: "rgba(252, 255, 255, 0.8)",
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
  breatherContent: {
    fontSize: "18rem",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
    fontStyle: "italic",
  },
  poemTitle: {
    fontSize: "20rem",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
    fontWeight: "700",
  },
  breatherAuthor: {
    fontSize: "20rem",
    alignSelf: "flex-start",
    fontFamily: "Avenir",
  },
  breatherInstruction: {
    marginTop: "2rem",
    marginBottom: "-10rem",
    paddingLeft: "30rem",
    fontSize: "16rem",
    fontFamily: "Avenir",
  },
  breatherIntro: {
    marginTop: "30rem",
    paddingLeft: "30rem",
    fontSize: "28rem",
    fontWeight: "800",
    fontFamily: "Avenir",
  },
});
