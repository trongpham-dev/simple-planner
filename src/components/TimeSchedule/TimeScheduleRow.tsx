import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBgColor, handleBorderBottomColor } from "common/plannerRendering";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  timeSchedule: string;
  portraitRowHeight?: number;
}

export default function TimeScheduleRow({ timeSchedule, portraitRowHeight }: Props) {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      width: "100%",
      height: 19,
      marginTop: 8,

      "@media orientation: portrait": {
        height: portraitRowHeight || 19,
      },
    },
    time: {
      color: ThemeColors.get(color),
      position: "absolute",
      backgroundColor: handleBgColor(color),
      borderRadius: 6,
      fontSize: 8,
      width: 30,
      height: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      top: 10,
      // left: -40,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.time} debug={false}>
        <Text>{timeSchedule}</Text>
      </View>
    </View>
  );
}
