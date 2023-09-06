import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import TodoCard from "components/TodoCard";
import moment from "moment";
import { Daily1 } from "pages/daily/Daily1";
import { Daily2 } from "pages/daily/Daily2";
import Notes from "pages/weekly/Weekly3/Notes";

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

const getWeekDates = (year: number, month: number, dayOfWeek: number) => {
  let weeks = [];
  let firstDay = moment([year, month]).startOf("month");
  let lastDay = moment([year, month]).endOf("month");
  let week = firstDay.clone().day(dayOfWeek);
  while (week.isBefore(lastDay)) {
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push(week.clone().add(i, "d"));
    }
    weeks.push(days);
    week.add(7, "d");
  }
  return weeks;
};

interface Props {
  id: number;
  year: number;
  month: number;
  startDate: number;
}

export const Weekly4 = ({ id, year, month, startDate }: Props) => {
  const weeks = getWeekDates(year, month, startDate);
  let firstWeek = 0;
  const elms = weeks.map((w) => {
    const currMonth = moment().month(month).format("MMMM");
    const heading = moment().year(year).month(month).format("MMMM YYYY");
    const description = `${w[0].format("DD")} ${currMonth} - ${w[
      w.length - 1
    ].format("DD")} ${currMonth}`;
    return (
      <>
        <Page
          size="A4"
          style={styles.page}
          wrap={false}
          orientation="landscape"
          id={`${String(id)}-${String(firstWeek++)}`}
        >
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={`${description}`} />
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
        </Page>
        {w.map((d, i) => (
          <Daily2 key={i} day={d} />
        ))}
      </>
    );
  });

  return elms;
};
