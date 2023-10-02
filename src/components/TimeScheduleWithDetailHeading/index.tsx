import { StyleSheet, View } from "@react-pdf/renderer";
import TimeScheduleRow from "components/TimeSchedule/TimeScheduleRow";
import DetailHeading from "components/TimeScheduleWithDetailHeading/DetailHeading";
import { COLOR } from "constants/color";

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
      <TimeScheduleRow timeSchedule="6:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="7:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="8:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="9:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="10:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="11:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="12:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="1:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="2:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="3:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="4:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="5:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="6:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="7:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="8:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="9:00" portraitRowHeight={21} />
      <TimeScheduleRow timeSchedule="10:00" portraitRowHeight={21} />
    </View>
  );
}
