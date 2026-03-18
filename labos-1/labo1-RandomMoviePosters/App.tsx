import React, {useState} from "react";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {StyleSheet, Image, Pressable, Alert} from "react-native";

interface Movie {
  id: number;
  name: string;
  year: string;
  url: string;
}

const movieData: Movie[] = [
  {
    id: 1,
    name: "Inception",
    year: "2010",
    url: "https://image.tmdb.org/t/p/w1280/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    id: 2,
    name: "Matrix",
    year: "1999",
    url: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 3,
    name: "Interstellar",
    year: "2014",
    url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    name: "The Godfather",
    year: "1972",
    url: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 5,
    name: "Pulp Fiction",
    year: "1994",
    url: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 6,
    name: "The Dark Knight",
    year: "2008",
    url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

const shuffleArray = (array: Movie[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function App() {
  const [movies] = useState(shuffleArray(movieData));

  const showMovieAlert = (name: string, year: string) => {
    Alert.alert(name, year);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Film 1 */}
        <Pressable
          onPress={() => showMovieAlert(movies[0].name, movies[0].year)}
        >
          <Image
            source={{uri: movies[0].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* Film 2 */}
        <Pressable
          onPress={() => showMovieAlert(movies[1].name, movies[1].year)}
        >
          <Image
            source={{uri: movies[1].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* Film 3 */}
        <Pressable
          onPress={() => showMovieAlert(movies[2].name, movies[2].year)}
        >
          <Image
            source={{uri: movies[2].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* Film 4 */}
        <Pressable
          onPress={() => showMovieAlert(movies[3].name, movies[3].year)}
        >
          <Image
            source={{uri: movies[3].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* Film 5 */}
        <Pressable
          onPress={() => showMovieAlert(movies[4].name, movies[4].year)}
        >
          <Image
            source={{uri: movies[4].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* Film 6 */}
        <Pressable
          onPress={() => showMovieAlert(movies[5].name, movies[5].year)}
        >
          <Image
            source={{uri: movies[5].url}}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  poster: {
    height: 150,
    width: 150,
  },
});
