import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { COLOR } from "constants/color";
import DayCardBlankRow from "pages/weekly/Weekly1/DayCardBlankRow";
import DayCardHeading from "pages/weekly/Weekly1/DayCardHeading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function DayCard() {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      width: "100%",
      height: "100%",
      paddingVertical: 8,
      paddingHorizontal: 8,
      backgroundColor: COLOR.EXTRA_LIGHT_BROWN,
    },
  });
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
