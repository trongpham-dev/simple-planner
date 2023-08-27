import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    borderLeftColor: COLOR.BROWN,
    borderLeftWidth: 3,
    color: COLOR.BROWN,
    width: "100%",
    height: 60,
    marginTop: 8.5,
    paddingLeft: 8,
    fontSize: 13,
  },
});

export default function Day() {
  return (
    <View style={styles.container}>
      <Text>07 Monday</Text>
    </View>
  );
}
