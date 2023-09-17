import { StyleSheet, View } from "@react-pdf/renderer";
import { handleBorderBottomColor } from "common/plannerRendering";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function DayCardBlankRow() {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      width: "100%",
      height: 20,
      marginTop: 6,
      paddingLeft: 8,
    },
  });
  return <View style={styles.container}></View>;
}
