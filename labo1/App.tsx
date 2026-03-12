import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Zoek een titel...."
        placeholderTextColor="#f0ebeb"
        onChangeText={(text) => console.log(text)}
      />

      <Image
        source={{uri: "https://m.media-amazon.com/images/I/61dk4SHy1CL.jpg"}}
        style={styles.albumCover}
        resizeMode="cover"
      />
      <Text style={styles.songTitle}>Bohemian Rhapsody</Text>
      <Text style={styles.albumTitle}>
        Queen- <Text style={styles.fontItalic}>The Original Soundtrack</Text>
      </Text>
      <Pressable
        style={({pressed}) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={() => Alert.alert("clicked")}
      >
        <Text style={styles.buttonText}>Play</Text>
      </Pressable>

      <View>
        <Text>siema</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  albumCover: {
    width: 250,
    height: 250,
    backgroundColor: "purple",
    borderRadius: 10,
    marginBottom: 25,
  },

  songTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },

  albumTitle: {
    fontSize: 16,
    color: "#efebeb",
  },
  fontItalic: {
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "green",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 25,
  },
  buttonPressed: {
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 25,
  },
  searchInput: {
    width: 250,
    backgroundColor: "#727070",
    color: "#efebeb",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
