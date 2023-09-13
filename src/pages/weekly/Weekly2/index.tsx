import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import { getWeekDates } from "common/dayTimeUtils";
import { DailyRendering } from "common/plannerRendering";
import PageDateTitle from "components/PageDateTitle";
import TimeTable from "components/TimeTable";
import moment from "moment";
import { Daily1 } from "pages/daily/Daily1";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  heading: {
    marginBottom: 6,
  },
});

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}

export const Weekly2 = ({ id, year, month, startDate }: Props) => {
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
        >
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
          </View>
          <TimeTable />
        </Page>
        {w.map((d, i) => DailyRendering(dailyLayout, d, i))}
      </>
    );
  });
  return elms;
};
