import { StyleSheet, View } from "@react-pdf/renderer";
import { COLOR } from "constants/color";
import { Fragment } from "react";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: COLOR.LIGHT_BROWN,
    borderBottomWidth: 1,
    alignItems: "center",
    height: 34,
  },
  monday: {
    width: "15%",
    borderRightColor: COLOR.LIGHT_BROWN,
    borderRightWidth: 1,
    height: "100%",
  },
  day: {
    width: "15%",
    height: "100%",
    borderRightColor: COLOR.LIGHT_BROWN,
    borderRightWidth: 1,
  },
  sunday: {
    width: "15%",
  },
});

type Props = {
  rowsCount: number;
};

const DayTableBlankRow = ({ rowsCount }: Props) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} debug={false} key={i}>
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

export default DayTableBlankRow;
