import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { handleBgColor } from "common/plannerRendering";

import BlankRowCard from "components/BlankRowCard";
import Calendar from "components/Calendar";
import EatTodayCard from "components/EatTodayCard";
import MainFocusCard from "components/MainFocusCard";
import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import Sidebar from "components/Sidebar";
import TimeScheduleWithDetailHeading from "components/TimeScheduleWithDetailHeading";
import TodoList from "components/TodoList";
import { Moment } from "moment";
import Notes from "pages/weekly/Weekly3/Notes";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";

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
    marginVertical: -2,
  },
  bottom: {
    height: "35%",
  },
  heading: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

interface Props {
  day: Moment;
}

export const Daily2 = ({ day }: Props) => {
  const { color } = useSelector(selectTheme());
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");
  return (
    <Page size="A4" style={styles.page} orientation="landscape">
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: new Date("2023-04-1"),
              }}
            />
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
                    backgroundColor: handleBgColor(color),
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
