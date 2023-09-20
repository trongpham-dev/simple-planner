import { Link, Page, Text, View } from "@react-pdf/renderer";
import { Moment } from "moment";

interface Props {
  day: Moment;
}

const Daily = ({ day }: Props) => {
  return (
    <Page>
      <View>
        <Text>Daily</Text>
        <Text>{`${day.date()} - ${day.format("MMMM")} ${day.year()}`}</Text>
        <Link src="#0-0">thang 1</Link>
        <Link src="#1-0">thang 2</Link>
        <Link src="#2-0">thang 3</Link>
        <Link src="#3-0">thang 4</Link>
        <Link src="#4-0">thang 5</Link>
        <Link src="#5-0">thang 6</Link>
        <Link src="#6-0">thang 7</Link>
        <Link src="#7-0">thang 8</Link>
        <Link src="#8-0">thang 9</Link>
        <Link src="#9-0">thang 10</Link>
        <Link src="#10-0">thang 11</Link>
        <Link src="#11-0">thang 12</Link>
      </View>
    </Page>
  );
};

export default Daily;
