import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";
import Day from "pages/weekly/Weekly3/Day";
import PageDateTitle from "components/PageDateTitle";
import TimeSchedule from "components/TimeSchedule";
import Priorities from "components/Priorities";
import TodoList from "components/TodoList";
import BlankRowCard from "components/BlankRowCard";

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
});

export const Daily1 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View>
          <PageDateTitle />
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <TimeSchedule />
          </View>
          <View style={styles.center}>
            <View style={styles.top}>
              <Priorities />
            </View>
            <View style={styles.bottom}>
              <TodoList />
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.top}>
              <BlankRowCard />
            </View>
            <View style={styles.bottom}>
              <Notes />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
