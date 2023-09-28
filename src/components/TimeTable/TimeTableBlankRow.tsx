import { StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  handleBgColor,
  handleBorderBottomColor,
} from "common/plannerRendering";
import { COLOR } from "constants/color";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  rowsCount: number;
};

const TimeTableBlankRow = ({ rowsCount }: Props) => {
  const { color } = useSelector(selectTheme());

  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      borderBottomColor: handleBorderBottomColor(color),
      borderBottomWidth: 1,
      alignItems: "center",
      height: 25,

      "@media orientation: portrait": {
        height: 38,
      },
    },
    monday: {
      width: "15%",
      borderRightColor: handleBorderBottomColor(color),
      borderRightWidth: 1,
      height: "100%",
    },
    day: {
      width: "15%",
      height: "100%",
      borderRightColor: handleBorderBottomColor(color),
      borderRightWidth: 1,
    },
    sunday: {
      width: "15%",
    },
    time: {
      position: "absolute",
      backgroundColor: handleBgColor(color),
      borderRadius: 6,
      fontSize: 8,
      width: 30,
      height: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      top: 6,
      left: -40,

      "@media orientation: portrait": {
        top: 29,
      },
    },
  });

  const blankRows = Array(rowsCount).fill(0);
  let startAt = 6;
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} debug={false} key={i}>
      <View style={styles.time} debug={false}>
        <Text>{`${startAt++}:00`}</Text>
      </View>

      <View style={styles.monday}></View>
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.sunday} />
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TimeTableBlankRow;
