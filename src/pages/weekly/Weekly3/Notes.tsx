import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBgColor } from "common/plannerRendering";
import Heading from "pages/weekly/Weekly3/Heading";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function Notes() {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      width: "100%",
      height: "100%",
      paddingVertical: 0,
      paddingHorizontal: 8,
      backgroundColor: handleBgColor(color),
    },
  });
  return (
    <View style={styles.container}>
      <Heading title="NOTES" />
    </View>
  );
}
