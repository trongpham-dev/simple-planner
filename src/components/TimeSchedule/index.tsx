import { StyleSheet, View } from "@react-pdf/renderer";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import TodoRow from "components/TodoCard/TodoRow";
import { COLOR } from "constants/color";
import Heading from "pages/weekly/Weekly3/Heading";

const styles = StyleSheet.create({
  container: {
    color: COLOR.BLACK,
    width: "100%",
    paddingLeft: 8,
    paddingRight: 8,
  },
  orderContainer: {
    backgroundColor: COLOR.LIGHT_BROWN,
    width: 25,
    textAlign: "center",
    paddingVertical: 2,
  },
});

export default function TimeSchedule() {
  return (
    <View style={styles.container}>
      <Heading title="SCHEDULE" />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
      <TimeScheduleRow />
    </View>
  );
}
