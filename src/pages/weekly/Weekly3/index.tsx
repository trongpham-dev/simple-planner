import { Page, StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";
import Day from "pages/weekly/Weekly3/Day";
import PageDateTitle from "components/PageDateTitle";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";
import moment from "moment";
import { getWeekDates } from "common/dayTimeUtils";
import { DailyRendering } from "common/plannerRendering";

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    marginTop: 4,
    width: "100%",
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
  },
  right: {
    width: "30%",
    height: "100%",
  },
  priorities: {
    height: "50%",
  },
  notes: {
    height: "50%",
  },
});

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}

export const Weekly3 = ({ id, year, month, startDate }: Props) => {
  const { dailyLayout } = useSelector(selectDaily());
  const weeks = getWeekDates(year, month, startDate);
  let firstWeek = 0;
  const elms = weeks.map((w) => {
    const heading = moment().year(year).month(month).format("MMMM YYYY");
    const description = `${w[0].format("DD MMMM")} - ${w[w.length - 1].format(
      "DD MMMM"
    )}`;
    return (
      <>
        <Page
          size="A4"
          style={styles.page}
          orientation="landscape"
          id={`${String(id)}-${String(firstWeek++)}`}
          wrap={false}
        >
          <View>
            <PageDateTitle heading={heading} description={description} />
          </View>
          <View style={styles.container}>
            <View style={styles.left}>
              <Heading title="SCHEDULE" />
              <Day />
              <Day />
              <Day />
              <Day />
              <Day />
              <Day />
              <Day />
            </View>
            <View style={styles.right}>
              <View style={styles.priorities}>
                <Heading title="WEEK’S PRIORITIES" />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
                <PriorityRow />
              </View>

              <View style={styles.notes}>
                <Notes />
              </View>
            </View>
          </View>
        </Page>
        {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
      </>
    );
  });
  return elms;
};
