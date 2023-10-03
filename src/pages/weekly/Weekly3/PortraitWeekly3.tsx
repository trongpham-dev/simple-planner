import { Page, StyleSheet, View } from "@react-pdf/renderer";
import Calendar from "components/Calendar";
import Heading from "components/Heading";

import PageDateTitle from "components/PageDateTitle";
import Priorities from "components/Priorities";
import Sidebar from "components/Sidebar";
import { Moment } from "moment";
import Day from "pages/weekly/Weekly3/Day";
import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 12,
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
    width: "6%",
    height: "100%",
    marginLeft: 4,
  },
  heading: {
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    height: "63%",
  },
  bottom: {
    width: "100%",
    height: "35%",
    flexDirection: "row",
  },
  priorities: {
    width: "50%",
    marginRight: 16,
  },
  notes: {
    width: "50%",
  },
});

interface Props {
  id: string;
  heading: string;
  description: string;
  days: Moment[];
}

export const PortraitWeekly3 = ({ id, heading, description, days }: Props) => {
  return (
    <Page size="A4" style={styles.page} orientation="portrait" wrap={false} id={id}>
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <View style={styles.heading}>
            <PageDateTitle heading={heading} description={description} />
            <Calendar
              context={{
                date: days[0].toDate(),
                activeRangeDates: [days[0].toDate(), days[6].toDate()],
              }}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.top}>
              <Heading title="SCHEDULE" />
              {days.map((d) => (
                <Day day={d} />
              ))}
            </View>

            <View style={styles.bottom}>
              <View style={styles.priorities}>
                <Priorities totalRow={8} rowHeight={23} />
              </View>

              <View style={styles.notes}>
                <Notes />
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
