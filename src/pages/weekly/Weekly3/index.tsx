import { Page, StyleSheet, View } from "@react-pdf/renderer";

import Notes from "pages/weekly/Weekly3/Notes";
import PriorityRow from "pages/weekly/Weekly3/PriorityRow";
import Day from "pages/weekly/Weekly3/Day";
import PageDateTitle from "components/PageDateTitle";
import { Moment } from "moment";
import Calendar from "components/Calendar";
import Sidebar from "components/Sidebar";
import Heading from "components/Heading";
import Priorities from "components/Priorities";

const styles = StyleSheet.create({
  page: {
    paddingLeft: 15,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
  },
  main: {
    width: "95%",
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 8,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
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

interface Props {
  id: string;
  heading: string;
  description: string;
  days: Moment[];
}

export const Weekly3 = ({ id, heading, description, days }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="landscape" id={id} wrap={false}>
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
              <View style={styles.left}>
                <Heading title="SCHEDULE" />
                {days.map((d) => (
                  <Day day={d} />
                ))}
              </View>
              <View style={styles.right}>
                <View style={styles.priorities}>
                  <Priorities totalRow={8} />
                </View>

                <View style={styles.notes}>
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
    </>
  );
};
