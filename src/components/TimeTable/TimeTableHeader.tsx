import { StyleSheet, View } from "@react-pdf/renderer";
import TimeTableHeaderItem from "components/TimeTable/TimeTableHeaderItem";
import { COLOR } from "constants/color";
import { Moment } from "moment";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: COLOR.LIGHT_BROWN,
    backgroundColor: COLOR.BROWN,
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "normal",
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

interface Props {
  days: Moment[];
}

const TimeTableHeader = ({ days }: Props) => {
  const elms = days.map((day, i) => <TimeTableHeaderItem key={i} withoutBorder={i === 6 ? true : false} day={day} />);
  return <View style={styles.container}>{elms}</View>;
};

export default TimeTableHeader;
