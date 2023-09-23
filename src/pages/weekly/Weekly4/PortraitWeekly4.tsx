import { Page, StyleSheet, View } from "@react-pdf/renderer";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import Sidebar from "components/Sidebar";
import TodoCard from "components/TodoCard";
import moment from "moment";
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
    // width: "26%",
    height: "50%",
  },
  note: {
    // width: "45%",
    width: "100%",
    height: "100%",
    // height: "158",
  },
});

export const PortraitWeekly4 = () => {
  return (
    <Page size="A4" style={styles.page} wrap={false} orientation="portrait">
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle
              heading={"heading"}
              description={`${"description"}`}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.top}>
              <DayTable
                days={[
                  moment(),
                  moment(),
                  moment(),
                  moment(),
                  moment(),
                  moment(),
                  moment(),
                ]}
              />
            </View>

            <View style={styles.bottom}>
              <View style={styles.bLeft}>
                <View style={[styles.todoCard, { marginBottom: 12 }]}>
                  <TodoCard />
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
          <Sidebar />
        </View>
      </View>
    </Page>
  );
};
