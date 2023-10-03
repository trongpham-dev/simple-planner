import { StyleSheet, View } from "@react-pdf/renderer";
import Heading from "components/Heading";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import DetailHeading from "components/TimeScheduleWithDetailHeading/DetailHeading";
import { COLOR } from "constants/color";
import { TIME_SCHEDULES } from "constants/common";

const styles = StyleSheet.create({
  container: {
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

export default function TimeScheduleWithDetailHeading() {
  return (
    <View style={styles.container}>
      <DetailHeading />

      <Heading title="SCHEDULE" />

      {TIME_SCHEDULES.map((item, index) => (
        <TimeScheduleRow timeSchedule={item} key={index} portraitRowHeight={21} />
      ))}
    </View>
  );
}
