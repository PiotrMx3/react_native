import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import Constants from "expo-constants";

const App = () => {
  const random0To10 = () => {
    return Math.floor(Math.random() * 10);
  };

  let valueInput = "";

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Het getal is: <Text style={styles.boldText}>{random0To10()}</Text>
      </Text>
      <View style={styles.subView}>
        <Text style={styles.subViewText}>SubView</Text>
      </View>

      <Pressable
        delayLongPress={3000}
        onLongPress={() => Alert.alert("Alert", "PIKACHHU")}
      >
        <Image
          style={styles.imageLocal}
          source={require("./assets/image.png")}
        ></Image>
      </Pressable>

      <Image
        style={styles.imageLocal}
        source={{
          uri: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/4/4b/Ash_Squirtle.png",
        }}
      ></Image>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Password"
        style={styles.textInput}
        onChangeText={(txt) => (valueInput = txt)}
        onSubmitEditing={() => Alert.alert(valueInput)}
      />
      <Pressable
        onPressIn={() =>
          Alert.alert("Alert", `The nnumber is ${random0To10()}`)
        }
        style={styles.button}
      >
        <Text style={{alignSelf: "center"}}>RANDOM</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff",
    borderWidth: 4,
    borderColor: "red",
    // justifyContent: "flex-start",
    // alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  containerText: {
    fontSize: 40,
    // marginTop: 100,
  },
  boldText: {
    fontWeight: "bold",
  },
  subView: {
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    width: 100,
  },
  subViewText: {
    backgroundColor: "blue",
    color: "white",
  },
  imageLocal: {
    marginTop: 10,
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  textInput: {
    borderBlockColor: "#211b77",
    borderWidth: 3,
    color: "#000000",
  },
  button: {
    backgroundColor: "#8f6161",
    padding: 10,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 15,
  },
});

export default App;
