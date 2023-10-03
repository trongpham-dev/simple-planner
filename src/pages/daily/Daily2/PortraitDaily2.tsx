import { Page, StyleSheet, View } from "@react-pdf/renderer";

import BlankRowCard from "components/BlankRowCard";
import Calendar from "components/Calendar";
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
    width: "6%",
    height: "100%",
    marginLeft: 4,
  },
  container: {
    flexDirection: "row",
    marginTop: 4,
    width: "100%",
  },
  left: {
    width: "65%",
    height: "100%",
  },
  right: {
    width: "35%",
    height: "100%",
    marginLeft: 10,
    flexDirection: "column",
  },
  lTop: {
    flexGrow: 1,
  },
  lBottom: {
    height: "25%",
    flexDirection: "row",
  },
  lbLeft: {
    width: "50%",
    height: "100%",
  },
  lbRight: {
    width: "50%",
    marginLeft: 8,
    height: "100%",
  },
  rTop: {
    height: "40%",
  },
  rMiddle1: {
    marginVertical: 10,
    height: "17%",
  },
  rMiddle2: {
    height: "20%",
    marginBottom: 15,
  },
  rBottom: {
    height: "25%",
  },

  pageHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
});

interface Props {
  day: Moment;
}

export const PortraitDaily2 = ({ day }: Props) => {
  const heading = day.format("DD dddd");
  const description = day.format("MMMM YYYY");

  const currDay = day.toDate();
  const id = `${currDay.getDate()}-${currDay.getMonth()}-${currDay.getFullYear()}`;

  return (
    <Page size="A4" style={styles.page} orientation="portrait" wrap={false} id={id}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.pageHeading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: currDay,
              }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.left}>
              <View style={styles.lTop}>
                <TimeScheduleWithDetailHeading />
              </View>
              <View style={styles.lBottom}>
                <View style={styles.lbLeft}>
                  <Notes />
                </View>
                <View style={styles.lbRight}>
                  <BlankRowCard
                    totalRow={7}
                    customStyles={{
                      backgroundColor: COLOR.EXTRA_LIGHT_BROWN,
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.right}>
              <View style={styles.rTop}>
                <MainFocusCard />
              </View>
              <View style={styles.rMiddle1}>
                <EatTodayCard totalRow={3} />
              </View>
              <View style={styles.rMiddle2}>
                <Priorities totalRow={5} heading="PRIORITIES" />
              </View>
              <View style={styles.rBottom}>
                <TodoList totalRow={5} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sidebar}>
          <Sidebar portraitPaddingVertical={28} />
        </View>
      </View>
    </Page>
  );
};
