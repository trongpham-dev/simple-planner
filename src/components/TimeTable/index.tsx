import { StyleSheet, View } from "@react-pdf/renderer";

import TimeTableBlankRow from "./TimeTableBlankRow";
import TimeTableHeader from "./TimeTableHeader";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 40,
    borderWidth: 1,
    borderColor: COLOR.LIGHT_BROWN,
  },
});

const TimeTable = () => (
  <View style={styles.tableContainer}>
    <TimeTableHeader />
    <TimeTableBlankRow rowsCount={18} />
  </View>
);

export default TimeTable;
