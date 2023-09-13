import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import Heading from "pages/weekly/Weekly3/Heading";
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
      <TimeScheduleRow timeSchedule="6:00" />
      <TimeScheduleRow timeSchedule="7:00" />
      <TimeScheduleRow timeSchedule="8:00" />
      <TimeScheduleRow timeSchedule="9:00" />
      <TimeScheduleRow timeSchedule="10:00" />
      <TimeScheduleRow timeSchedule="11:00" />
      <TimeScheduleRow timeSchedule="12:00" />
      <TimeScheduleRow timeSchedule="1:00" />
      <TimeScheduleRow timeSchedule="2:00" />
      <TimeScheduleRow timeSchedule="3:00" />
      <TimeScheduleRow timeSchedule="4:00" />
      <TimeScheduleRow timeSchedule="5:00" />
      <TimeScheduleRow timeSchedule="6:00" />
      <TimeScheduleRow timeSchedule="7:00" />
      <TimeScheduleRow timeSchedule="8:00" />
      <TimeScheduleRow timeSchedule="9:00" />
      <TimeScheduleRow timeSchedule="10:00" />
    </View>
  );
}
