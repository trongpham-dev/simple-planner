import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import DayTable from "components/DayTable";
import PageDateTitle from "components/PageDateTitle";
import TodoCard from "components/TodoCard";
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

export const Weekly4 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.heading}>
          <PageDateTitle />
        </View>

        <View style={styles.container}>
          <View style={styles.top}>
            <DayTable />
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
    </Document>
  );
};
