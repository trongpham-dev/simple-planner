import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TodoCard from "components/TodoCard";
import moment, { Moment } from "moment";
import Notes from "pages/weekly/Weekly3/Notes";

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
    paddingBottom: 10,
    paddingRight: 8,
    flexGrow: 1,
  },
  sidebar: {
    width: "6%",
    height: "100%",
    marginLeft: 4,
  },
  heading: {
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    marginBottom: 12,
    height: "65%",
  },
  bottom: {
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bLeft: {
    width: "40%",
    flexDirection: "column",
    height: "100%",
    marginRight: 16,
  },
  bRight: {
    width: "60%",
    height: "100%",
  },
  todoCard: {
    height: "50%",
  },
  note: {
    width: "100%",
    height: "100%",
  },
});

interface Props {
  id: string;
  heading: string;
  description: string;
  days: Moment[];
}

export const PortraitWeekly4 = ({ id, heading, description, days }: Props) => {
  return (
    <Page size="A4" style={styles.page} wrap={false} orientation="portrait" id={id}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: days[0].toDate(),
                activeRangeDates: [days[0].toDate(), days[6].toDate()],
              }}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.top}>
              <DayTable days={[days[0], days[1], days[2], days[3], days[4], days[5], days[6]]} />
            </View>

            <View style={styles.bottom}>
              <View style={styles.bLeft}>
                <View style={[styles.todoCard, { marginBottom: 12 }]}>
                  <TodoCard title="WHAT WORKED WELL?" />
                </View>
                <View style={styles.todoCard}>
                  <TodoCard />
                </View>
              </View>

              <View style={styles.bRight}>
                <View style={styles.note}>
                  <Notes />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sidebar}>
          <Sidebar portraitPaddingVertical={29} />
        </View>
      </View>
    </Page>
  );
};
