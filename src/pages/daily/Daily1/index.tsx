import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import BlankRowCard from "components/BlankRowCard";
import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import TimeSchedule from "components/TimeSchedule";
import TodoList from "components/TodoList";
import { Moment } from "moment";
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
interface Props {
  day: Moment;
}
export const Daily1 = ({ day }: Props) => {
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");
  return (
    <Page size="A4" style={styles.page} orientation="landscape" wrap={false}>
      <View>
        <PageDateTitle heading={heading} description={description} />
      </View>
      <View style={styles.container}>
        <View style={styles.left}>
          <TimeSchedule />
        </View>
        <View style={styles.center}>
          <View style={styles.top}>
            <Priorities totalRow={7} />
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
              <BlankRowCard totalRow={8} />
            </View>
            <View style={styles.bottom}>
              <Notes />
            </View>
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
    </Page>
  );
};
