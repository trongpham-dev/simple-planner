import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { handleBgColor } from "common/plannerRendering";
import { COLOR } from "constants/color";
import { CalendarContext } from "models/CalendarContext";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { getDatesFromRange, getDatesOfMonth, isSameDay, isSameMonth } from "utils/date-time";

type Props = {
  customStyles?: any;
  context: CalendarContext;
};

export default function Calendar({ customStyles, context }: Props) {
  const { color } = useSelector(selectTheme());
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 230,
    },
    text: {
      fontStyle: "normal",
      fontSize: 8,
      paddingVertical: 2,
      width: 16,
      textAlign: "center",
      alignContent: "center",
      color: COLOR.BLACK,

      "@media orientation: landscape": {
        paddingVertical: 3,
        marginBottom: 1,
      },
    },

    startHighlight: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    endHighlight: {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    circleHighlight: {
      borderRadius: "50%",
      paddingVertical: 3,
    },
    disable: {
      color: "lightgray",
    },
    highlight: {
      backgroundColor: handleBgColor(color),
    },
    link: {
      textDecoration: "none",
    },
  });

  const { date, activeRangeDates } = context;
  const currentMonth = context.date.getMonth() + 1;
  const currentYear = context.date.getFullYear();

  const dates = getDatesOfMonth(currentMonth, currentYear) as Date[];

  const activeDates = activeRangeDates
    ? (getDatesFromRange(activeRangeDates[0], activeRangeDates[1]) as Date[])
    : [date];

  return (
    <View style={[styles.container, customStyles]}>
      {dates.map((item, i) => {
        const day = moment(item).date();
        const isDisable = !isSameMonth(item, date);
        const isStartHighlight = activeRangeDates && isSameDay(item, activeRangeDates[0]);
        const isEndHighlight = activeRangeDates && isSameDay(item, activeRangeDates[1]);
        const isCircleHighlight = !activeRangeDates && isSameDay(item, activeDates[0]);
        const isHighlight = activeDates.some((activeDate) => isSameDay(activeDate, item));
        let currDay = moment(item).toDate();
        let src = `#${currDay.getDate()}-${currDay.getMonth()}-${currDay.getFullYear()}`;

        return (
          <Link src={src} style={styles.link} key={i}>
            <Text
              style={[
                styles.text,
                isDisable ? styles.disable : {},
                isHighlight ? styles.highlight : {},
                isStartHighlight ? styles.startHighlight : {},
                isEndHighlight ? styles.endHighlight : {},
                isCircleHighlight ? styles.circleHighlight : {},
              ]}
              key={i}
            >
              {day}
            </Text>
          </Link>
        );
      })}
    </View>
  );
}
