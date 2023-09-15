import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { Moment } from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  day: Moment;
}
export default function DayCardHeading({ day }: Props) {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: ThemeColors.get(color),
      borderBottomWidth: 1,
      color: ThemeColors.get(color),
      fontStyle: "normal",
      width: "100%",
      paddingBottom: 4,
      fontSize: 13,
      flexDirection: "row",
    },
    number: {
      marginRight: 6,
      fontWeight: 700,
    },
    text: {
      fontWeight: 400,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{day.format("DD")}</Text>
      <Text style={styles.text}>{day.format("dddd")}</Text>
    </View>
  );
}
