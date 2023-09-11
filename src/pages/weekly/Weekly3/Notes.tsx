import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BROWN,
    width: "100%",
    height: "100%",
    paddingVertical: 0,
    paddingHorizontal: 8,
    backgroundColor: COLOR.LIGHT_BROWN,
  },
});

export default function Notes() {
  return (
    <View style={styles.container}>
      <Heading title="NOTES" />
    </View>
  );
}
