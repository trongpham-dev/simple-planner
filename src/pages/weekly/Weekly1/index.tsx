import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { getWeekDates } from "common/dayTimeUtils";
import { DailyRendering } from "common/plannerRendering";

import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import moment from "moment";
import DayCard from "pages/weekly/Weekly1/DayCard";
import Notes from "pages/weekly/Weekly3/Notes";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
    fontFamily: "Clash Display",
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
  main: {
    width: "95%",
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 6,
  },
  container: {
    marginTop: 4,
    width: "100%",
  },
  top: {
    height: "50%",
    marginBottom: 12,
    flexDirection: "row",
  },
  bottom: {
    height: "50%",
    flexDirection: "row",
  },
  card: {
    width: "25%",
    height: "100%",
    marginRight: "12",
  },
  withoutMargin: {
    marginRight: 0,
  },
  sidebar: {
    width: "5%",
    height: "100%",
    marginLeft: 4,
  },
});

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}

export const Weekly1 = ({ id, year, month, startDate }: Props) => {
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
          <View style={styles.wrapper}>
            <View style={styles.main}>
              <View style={styles.heading}>
                <PageDateTitle heading={heading} description={description} />
              </View>
              <View style={styles.container}>
                <View style={styles.top}>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={[styles.card, styles.withoutMargin]}>
                    <DayCard />
                  </View>
                </View>
                <View style={styles.bottom}>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={styles.card}>
                    <DayCard />
                  </View>
                  <View style={[styles.card, styles.withoutMargin]}>
                    <Notes />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.sidebar}>
              <Sidebar />
            </View>
          </View>
        </Page>
        {w.map((d, i) => DailyRendering(dailyLayout, d, i))}
      </>
    );
  });
  return elms;
};
