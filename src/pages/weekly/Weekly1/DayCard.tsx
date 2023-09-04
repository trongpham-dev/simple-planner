import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import DayCardBlankRow from "pages/weekly/Weekly1/DayCardBlankRow";
import DayCardHeading from "pages/weekly/Weekly1/DayCardHeading";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BROWN,
    width: "100%",
    height: "100%",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: COLOR.EXTRA_LIGHT_BROWN,
  },
});

export default function DayCard() {
  return (
    <View style={styles.container}>
      <DayCardHeading />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
      <DayCardBlankRow />
    </View>
  );
}
