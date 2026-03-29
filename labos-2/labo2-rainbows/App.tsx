import {rainbow} from "rainbow-colors-array-ts";
import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Rainbow from "./components/Rainbow/Rainbow";
import Footer from "./components/Footer/Footer";

function Content() {
  const insets = useSafeAreaInsets();
  const colors = rainbow(10, "hex", false);
  const text = "Rainbow";

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Rainbow boxStyle={{}} lineStyle={{height: 10}} colors={colors} />

      <View style={{flex: 1, flexDirection: "row"}}>
        {/* Left container*/}

        <Rainbow
          boxStyle={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          lineStyle={{width: 10}}
          colors={colors}
        />

        {/* Right container*/}

        <Rainbow
          boxStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          lineStyle={{height: 50, width: 50}}
          colors={colors}
        />
      </View>

      {/* Footer container*/}

      <Footer
        text={text}
        containerStyle={{
          height: 100,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Content />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
