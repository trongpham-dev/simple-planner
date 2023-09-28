import { StyleSheet, View } from "@react-pdf/renderer";

import TimeTableBlankRow from "./TimeTableBlankRow";
import TimeTableHeader from "./TimeTableHeader";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { handleBorderBottomColor } from "common/plannerRendering";

interface Props {
  days: Moment[];
}

const TimeTable = ({ days }: Props) => {
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
        days={[days[0], days[1], days[2], days[3], days[4], days[5], days[6]]}
      />
      <TimeTableBlankRow rowsCount={18} />
    </View>
  );
};

export default TimeTable;
