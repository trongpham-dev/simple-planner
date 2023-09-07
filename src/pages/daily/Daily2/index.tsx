import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

import BlankRowCard from "components/BlankRowCard";
import EatTodayCard from "components/EatTodayCard";
import MainFocusCard from "components/MainFocusCard";
import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import Sidebar from "components/Sidebar";
import TimeScheduleWithDetailHeading from "components/TimeScheduleWithDetailHeading";
import TodoList from "components/TodoList";
import { COLOR } from "constants/color";
import { Moment } from "moment";
import Notes from "pages/weekly/Weekly3/Notes";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
    fontFamily: "Clash Display",
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
    width: "26%",
    height: "100%",
    marginHorizontal: 16,
  },
  right: {
    width: "26%",
    height: "100%",
  },
  top: {
    height: "26%",
    marginBottom: 8,
  },
  middle: {
    height: "35%",
    marginVertical: 8,
  },
  bottom: {
    height: "35%",
  },
});

interface Props {
  day: Moment;
}

export const Daily2 = ({ day }: Props) => {
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");
  return (
    <Page size="A4" style={styles.page} orientation="landscape">
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View>
            <PageDateTitle heading={heading} description={description} />
          </View>
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
                  customStyles={{
                    backgroundColor: COLOR.EXTRA_LIGHT_BROWN,
                    paddingVertical: 8,
                  }}
                />
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.top}>
                <EatTodayCard totalRow={3} />
              </View>
              <View style={styles.middle}>
                <TodoList totalRow={5} />
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
