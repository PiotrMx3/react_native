import {HexColor, rainbow} from "rainbow-colors-array-ts";
import {StyleProp, Text, View, ViewStyle} from "react-native";

interface RainbowProps {
  boxStyle: StyleProp<ViewStyle>;
  lineStyle: StyleProp<ViewStyle>;
  colors: HexColor[];
  amount?: number;
  text?: string;
}

const Rainbow = ({boxStyle, lineStyle, colors, amount = 6}: RainbowProps) => {
  return (
    <View style={boxStyle}>
      {colors.slice(0, amount).map((color) => (
        <View
          key={color.hex}
          style={[{backgroundColor: color.hex}, lineStyle]}
        ></View>
      ))}
    </View>
  );
};

export default Rainbow;
