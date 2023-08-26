import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import Heading from "pages/weekly/Weekly3/Heading";
import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";
import Day from "pages/weekly/Weekly3/Day";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    width: "100%",
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
  },
  right: {
    width: "30%",
    height: "100%",
  },
  priorities: {
    height: "50%",
  },
  notes: {
    height: "50%",
  },
});

const days = Array(7).fill(1);

// Create Document Component
export const Weekly3 = () => {
  console.log(days);

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.container}>
          <View style={styles.left}>
            <Heading title="SCHEDULE" />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
          </View>
          <View style={styles.right}>
            <View style={styles.priorities}>
              <Heading title="WEEK’S PRIORITIES" />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
              <PriorityRow />
            </View>

            <View style={styles.notes}>
              <Notes />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
