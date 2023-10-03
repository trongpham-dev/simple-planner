import { Page, StyleSheet, View } from "@react-pdf/renderer";

import BlankRowCard from "components/BlankRowCard";
import Calendar from "components/Calendar";
import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import Sidebar from "components/Sidebar";
import TimeSchedule from "components/TimeSchedule";
import TodoList from "components/TodoList";
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
  container: {
    flexDirection: "row",
    marginTop: 4,
    width: "100%",
  },
  left: {
    flexGrow: 1,
  },
  center: {
    width: "30%",
    height: "100%",
    marginHorizontal: 16,
  },
  right: {
    width: "30%",
    height: "100%",
  },
  top: {
    height: "50%",
  },
  bottom: {
    height: "50%",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
interface Props {
  day: Moment;
}
export const Daily1 = ({ day }: Props) => {
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");

  const currDay = day.toDate();
  const id = `${currDay.getDate()}-${currDay.getMonth()}-${currDay.getFullYear()}`;

  return (
    <Page size="A4" style={styles.page} orientation="landscape" wrap={false} id={id}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: currDay,
              }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.left}>
              <TimeSchedule />
            </View>
            <View style={styles.center}>
              <View style={styles.top}>
                <Priorities totalRow={7} />
              </View>
              <View style={styles.bottom}>
                <TodoList totalRow={8} />
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.top}>
                <BlankRowCard totalRow={7} />
              </View>
              <View style={styles.bottom}>
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
  );
};
