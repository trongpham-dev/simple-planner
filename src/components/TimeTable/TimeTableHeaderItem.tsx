import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { handleBorderBottomColor } from "common/plannerRendering";
import { Moment } from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

type Props = {
  withoutBorder?: boolean;
  day: Moment;
};

const TimeTableHeaderItem = ({ withoutBorder = false, day }: Props) => {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      width: "15%",
      height: "100%",
      borderRightColor: handleBorderBottomColor(color),
      borderRightWidth: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 12,

      "@media orientation: portrait": {
        fontSize: 9,
      },
    },
    withoutBorderContainer: {
      width: "15%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      "@media orientation: portrait": {
        fontSize: 9,
      },
    },
    title: {
      fontWeight: 400,
    },
    number: {
      marginRight: 3,
      fontWeight: 600,
    },
  });

  return (
    <View
      style={withoutBorder ? styles.withoutBorderContainer : styles.container}
    >
      <Text style={styles.number}>{day.format("DD")}</Text>
      <Text style={styles.title}>{day.format("dddd")}</Text>
    </View>
  );
};

export default TimeTableHeaderItem;
