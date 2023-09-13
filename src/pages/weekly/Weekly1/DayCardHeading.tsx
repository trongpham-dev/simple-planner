import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function DayCardHeading() {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: ThemeColors.get(color),
      borderBottomWidth: 1,
      fontStyle: "normal",
      color: ThemeColors.get(color),
      width: "100%",
      paddingBottom: 4,
      fontSize: 13,
      fontWeight: 700,
      flexDirection: "row",
    },
    number: {
      marginRight: 6,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.number}>09</Text>
      <Text>Wednesday</Text>
    </View>
  );
}
