import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import Heading from "components/Heading";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import { TIME_SCHEDULES } from "constants/common";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

export default function TimeSchedule() {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    container: {
      color: ThemeColors.get(color),
      width: "100%",
      paddingLeft: 8,
      paddingRight: 8,
    },
    orderContainer: {
      backgroundColor: ThemeColors.get(color),
      width: 25,
      textAlign: "center",
      paddingVertical: 2,
    },
  });

  return (
    <View style={styles.container}>
      <Heading title="SCHEDULE" />

      {TIME_SCHEDULES.map((item, index) => (
        <TimeScheduleRow timeSchedule={item} key={index} />
      ))}
    </View>
  );
}
