import {HexColor, rainbow} from "rainbow-colors-array-ts";
import {StyleProp, Text, View, ViewStyle} from "react-native";

interface FooterProps {
  text: string;
  containerStyle: StyleProp<ViewStyle>;
}

const Footer = ({text, containerStyle}: FooterProps) => {
  const colors = rainbow(text.length, "hex", false);

  return (
    <View style={containerStyle}>
      <Text>
        {text.split("").map((e, i) => (
          <Text key={e} style={{color: colors[i].hex, fontSize: 100}}>
            {e}
          </Text>
        ))}
      </Text>
    </View>
  );
};

export default Footer;
