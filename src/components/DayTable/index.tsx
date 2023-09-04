import { StyleSheet, View } from "@react-pdf/renderer";
import DayTableBlankRow from "components/DayTable/DayTableBlankRow";

import TimeTableHeader from "components/TimeTable/TimeTableHeader";
import { COLOR } from "constants/color";
import { Moment } from "moment";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: COLOR.LIGHT_BROWN,
  },
});

interface Props {
  days: Moment[];
}
const DayTable = ({ days }: Props) => (
  <View style={styles.tableContainer}>
    <TimeTableHeader days={days} />
    <DayTableBlankRow rowsCount={8} />
  </View>
);

export default DayTable;
