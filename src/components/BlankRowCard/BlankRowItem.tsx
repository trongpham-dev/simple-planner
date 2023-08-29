import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    color: COLOR.BLACK,
    width: "100%",
    height: 20,
    marginTop: 7,
    paddingLeft: 8,
  },
});

export default function BlankRowItem() {
  return <View style={styles.container}></View>;
}
