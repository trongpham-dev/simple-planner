import { StyleSheet, View } from "@react-pdf/renderer";
import TimeTableHeaderItem from "components/TimeTable/TimeTableHeaderItem";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: COLOR.LIGHT_BROWN,
    backgroundColor: COLOR.BROWN,
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
    color: COLOR.WHITE,
  },
  monday: {
    width: "15%",
    borderRightColor: COLOR.LIGHT_BROWN,
    borderRightWidth: 1,
    height: "100%",
    flexDirection: "row",
  },
  day: {
    width: "15%",
    height: "100%",
    borderRightColor: COLOR.LIGHT_BROWN,
    borderRightWidth: 1,
    flexDirection: "row",
  },
  sunday: {
    width: "15%",
  },
});

const TimeTableHeader = () => {
  return (
    <View style={styles.container}>
      <TimeTableHeaderItem />
      <TimeTableHeaderItem />
      <TimeTableHeaderItem />
      <TimeTableHeaderItem />
      <TimeTableHeaderItem />
      <TimeTableHeaderItem />
      <TimeTableHeaderItem withoutBorder={true} />
    </View>
  );
};

export default TimeTableHeader;
