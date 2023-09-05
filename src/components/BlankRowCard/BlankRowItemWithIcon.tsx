import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { WaterIcon } from "assets/images/svg-icons";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    width: "100%",
    height: 20,
    marginTop: 7,
    paddingLeft: 4,
    flexDirection: "row",
  },
});

export default function BlankRowItemWithIcon() {
  return (
    <View style={styles.container}>
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
      <WaterIcon />
    </View>
  );
}
