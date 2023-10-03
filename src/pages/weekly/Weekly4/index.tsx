import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TodoCard from "components/TodoCard";
import { Moment } from "moment";
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
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    marginBottom: 20,
  },
  bottom: {
    paddingTop: 8,
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
  id: string;
  heading: string;
  description: string;
  days: Moment[];
}

export const Weekly4 = ({ id, heading, description, days }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} wrap={false} orientation="landscape" id={id}>
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
                <DayTable days={days} />
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
    </>
  );
};
