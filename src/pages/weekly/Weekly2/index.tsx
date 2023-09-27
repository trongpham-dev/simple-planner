import { Page, StyleSheet, View } from "@react-pdf/renderer";
import PageDateTitle from "components/PageDateTitle";
import TimeTable from "components/TimeTable";

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
});

interface Props {
  id: string;
  heading: string;
  description: string;
}

export const Weekly2 = ({ id, heading, description }: Props) => {
  return (
    <>
      <Page size="A4" style={styles.page} orientation="landscape" id={id}>
        <View style={styles.heading}>
          <PageDateTitle heading={heading} description={description} />
        </View>
        <TimeTable />
      </Page>
    </>
  );
};
