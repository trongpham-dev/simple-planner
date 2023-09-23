import { StyleSheet, View } from "@react-pdf/renderer";

import TimeTableBlankRow from "./TimeTableBlankRow";
import TimeTableHeader from "./TimeTableHeader";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { handleBorderBottomColor } from "common/plannerRendering";

const TimeTable = () => {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginLeft: 40,
      borderWidth: 1,
      borderColor: handleBorderBottomColor(color),
    },
  });
  return (
    <View style={styles.tableContainer}>
      <TimeTableHeader
        days={[
          moment(),
          moment(),
          moment(),
          moment(),
          moment(),
          moment(),
          moment(),
        ]}
      />
      <TimeTableBlankRow rowsCount={18} />
    </View>
  );
};

export default TimeTable;
