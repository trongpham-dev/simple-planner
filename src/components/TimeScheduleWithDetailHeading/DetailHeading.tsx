import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBorderBottomColor } from "common/plannerRendering";
import { COLOR } from "constants/color";
import { ColorType } from "models/enum";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function DetailHeading() {
  const { color } = useSelector(selectTheme());

  const handleBgColor = () => {
    if (color === ColorType.Primary || color === ColorType.Secondary) {
      return COLOR.EXTRA_LIGHT_BROWN;
    }
    return "#f9f5fb";
  };

  const styles = StyleSheet.create({
    container: {
      fontStyle: "normal",
      color: ThemeColors.get(color),
      width: "100%",
      fontSize: 12,
      fontWeight: 700,
      flexDirection: "row",
      backgroundColor: handleBgColor(),
      height: 30,
      alignItems: "center",
    },
    left: {
      flexDirection: "row",
      width: "170",
      justifyContent: "space-between",
      paddingHorizontal: 12,
    },
    right: {
      flexDirection: "row",
      flexGrow: 1,
      justifyContent: "space-between",
      paddingHorizontal: 12,
    },
    line: {
      width: 1,
      height: "100%",
      backgroundColor: handleBorderBottomColor(color),
    },
    input: {
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      width: 50,
      textAlign: "right",
      fontSize: 10,
      paddingBottom: 2,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>WOKE UP AT</Text>
        <Text style={styles.input}>a.m</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.right}>
        <Text>HOURS SLEPT</Text>
        <Text style={styles.input}>hrs</Text>
      </View>
    </View>
  );
}
