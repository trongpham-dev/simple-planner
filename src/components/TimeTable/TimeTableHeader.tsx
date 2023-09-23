import { StyleSheet, View } from "@react-pdf/renderer";
import { ThemeColors } from "common/plannerOptions";
import { handleBgColor } from "common/plannerRendering";
import TimeTableHeaderItem from "components/TimeTable/TimeTableHeaderItem";
import { COLOR } from "constants/color";
import { Moment } from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

interface Props {
  days: Moment[];
}

const TimeTableHeader = ({ days }: Props) => {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderBottomColor: handleBgColor(color),
      backgroundColor: ThemeColors.get(color),
      borderBottomWidth: 1,
      alignItems: "center",
      height: 24,
      textAlign: "center",
      fontStyle: "normal",
      flexGrow: 1,
      color: COLOR.WHITE,

      "@media orientation: portrait": {
        height: 26,
      },
    },
    monday: {
      width: "15%",
      borderRightColor: handleBgColor(color),
      borderRightWidth: 1,
      height: "100%",
      flexDirection: "row",
    },
    day: {
      width: "15%",
      height: "100%",
      borderRightColor: handleBgColor(color),
      borderRightWidth: 1,
      flexDirection: "row",
    },
    sunday: {
      width: "15%",
    },
  });

  const elms = days.map((day, i) => (
    <TimeTableHeaderItem
      key={i}
      withoutBorder={i === 6 ? true : false}
      day={day}
    />
  ));
  return <View style={styles.container}>{elms}</View>;
};

export default TimeTableHeader;
