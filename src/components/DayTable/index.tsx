import { StyleSheet, View } from "@react-pdf/renderer";
import DayTableBlankRow from "components/DayTable/DayTableBlankRow";

import TimeTableHeader from "components/TimeTable/TimeTableHeader";
import { COLOR } from "constants/color";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: COLOR.LIGHT_BROWN,
  },
});

const DayTable = () => (
  <View style={styles.tableContainer}>
    <TimeTableHeader />
    <DayTableBlankRow rowsCount={8} />
  </View>
);

export default DayTable;
