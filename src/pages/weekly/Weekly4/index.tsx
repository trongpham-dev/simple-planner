import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { getWeekDates } from "common/dayTimeUtils";
import { DailyRendering } from "common/plannerRendering";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TodoCard from "components/TodoCard";
import moment from "moment";
import Notes from "pages/weekly/Weekly3/Notes";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
  main: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  sidebar: {
    width: "5%",
    height: "100%",
    marginLeft: 4,
  },
  heading: {
    marginBottom: 6,
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    marginBottom: 12,
  },
  bottom: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoCard: {
    width: "26%",
  },
  note: {
    width: "45%",
    height: "158",
  },
});

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}

export const Weekly4 = ({ id, year, month, startDate }: Props) => {
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
          wrap={false}
          orientation="landscape"
          id={`${String(id)}-${String(firstWeek++)}`}
        >
          <View style={styles.wrapper}>
            <View style={styles.main}>
              <View style={styles.heading}>
                <PageDateTitle
                  heading={heading}
                  description={`${description}`}
                />
              </View>

              <View style={styles.container}>
                <View style={styles.top}>
                  <DayTable days={w} />
                </View>

                <View style={styles.bottom}>
                  <View style={styles.todoCard}>
                    <TodoCard />
                  </View>
                  <View style={styles.todoCard}>
                    <TodoCard />
                  </View>
                  <View style={styles.note}>
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

        {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
      </>
    );
  });

  return elms;
};
