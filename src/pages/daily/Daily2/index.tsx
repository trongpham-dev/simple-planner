import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import BlankRowCard from "components/BlankRowCard";
import MainFocusCard from "components/MainFocusCard";
import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import TimeScheduleWithDetailHeading from "components/TimeScheduleWithDetailHeading";
import TodoList from "components/TodoList";
import { COLOR } from "constants/color";
import Notes from "pages/weekly/Weekly3/Notes";

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
    width: "26%",
    height: "100%",
    marginHorizontal: 16,
  },
  right: {
    width: "26%",
    height: "100%",
  },
  top: {
    height: "35%",
  },
  middle: {
    height: "30%",
    marginVertical: 8,
  },
  bottom: {
    height: "35%",
  },
});

export const Daily2 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View>{/* <PageDateTitle /> */}</View>
        <View style={styles.container}>
          <View style={styles.left}>
            <TimeScheduleWithDetailHeading />
          </View>
          <View style={styles.center}>
            <View style={styles.top}>
              <MainFocusCard />
            </View>
            <View style={styles.middle}>
              <Priorities totalRow={5} />
            </View>
            <View style={styles.bottom}>
              <BlankRowCard
                totalRow={5}
                customStyles={{ backgroundColor: COLOR.EXTRA_LIGHT_BROWN }}
              />
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.top}>
              <BlankRowCard totalRow={5} />
            </View>
            <View style={styles.middle}>
              <TodoList totalRow={5} />
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
