import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { COLOR } from "constants/color";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function DayCardBlankRow() {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      borderBottomColor: COLOR.EXTRA_LIGHT_BROWN_2,
      borderBottomWidth: 1,
      // color: ThemeColors.get(color),
      width: "100%",
      height: 20,
      marginTop: 6,
      paddingLeft: 8,
    },
  });
  return <View style={styles.container}></View>;
}
