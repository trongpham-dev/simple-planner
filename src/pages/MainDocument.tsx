import { Document, Font } from "@react-pdf/renderer";
import { Weekly4 } from "./weekly/Weekly4";
import { Weekly2 } from "./weekly/Weekly2";
import { selectWeekly } from "stores/reducers/weekly";
import { WeeklyType } from "models/enum";
import { Weekly1 } from "./weekly/Weekly1";
import { useSelector } from "react-redux";
import clashDisplayRegular from "./../assets/fonts/ClashDisplay-Regular.ttf";
import clashDisplayBold from "./../assets/fonts/ClashDisplay-Bold.ttf";
import clashDisplaySemiBold from "./../assets/fonts/ClashDisplay-Semibold.ttf";
import clashDisplayMedium from "./../assets/fonts/ClashDisplay-Medium.ttf";

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Font.register({
  family: "Clash Display",
  format: "truetype",
  fonts: [
    { src: clashDisplayRegular, fontWeight: "normal" },
    { src: clashDisplayBold, fontWeight: "bold" },
    { src: clashDisplayMedium, fontWeight: "medium" },
    { src: clashDisplaySemiBold, fontWeight: "semibold" },
  ],
});

const MainDocument = () => {
  const { weeklyLayout } = useSelector(selectWeekly());

  const renderWeekly = (m: number, startDate: number) => {
    if (weeklyLayout === WeeklyType.Boxed)
      return (
        <Weekly1 id={m} year={2023} month={m} startDate={startDate} key={m} />
      );
    if (weeklyLayout === WeeklyType.Hourly)
      return (
        <Weekly2 id={m} year={2023} month={m} startDate={startDate} key={m} />
      );
    if (weeklyLayout === WeeklyType.Lined)
      return (
        <Weekly2 id={m} year={2023} month={m} startDate={startDate} key={m} />
      );
    return (
      <Weekly4 id={m} year={2023} month={m} startDate={startDate} key={m} />
    );
  };

  const elms = months.map((m) => renderWeekly(m, 1));

  return <Document style={{ fontFamily: "Clash Display" }}>{elms}</Document>;
};

export default MainDocument;
