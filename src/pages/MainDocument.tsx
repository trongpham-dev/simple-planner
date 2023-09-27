import { Document, Font } from "@react-pdf/renderer";
import { Weekly4 } from "./weekly/Weekly4";
import { Weekly2 } from "./weekly/Weekly2";
import { selectWeekly } from "stores/reducers/weekly";
import { WeeklyType } from "models/enum";
import { Weekly1 } from "./weekly/Weekly1";
import { useSelector } from "react-redux";
import clashDisplayRegular from "./../assets/fonts/ClashDisplay-Regular.otf";
import clashDisplayBold from "./../assets/fonts/ClashDisplay-Bold.otf";
import { getWeekDates } from "common/dayTimeUtils";
import moment from "moment";
import { DailyRendering } from "common/plannerRendering";
import { selectDaily } from "stores/reducers/daily";
import { Weekly3 } from "./weekly/Weekly3";
// import clashDisplaySemiBold from "./../assets/fonts/ClashDisplay-Semibold.ttf";
// import clashDisplayMedium from "./../assets/fonts/ClashDisplay-Medium.ttf";

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Font.register({
  family: "Clash Display",
  fonts: [
    // { src: clashDisplayMedium, fontWeight: "medium" },
    // { src: clashDisplaySemiBold, fontWeight: "semibold" },
    { src: clashDisplayBold, fontWeight: 700 },
    { src: clashDisplayRegular, fontWeight: 400 },
  ],
});

const MainDocument = () => {
  const { weeklyLayout } = useSelector(selectWeekly());
  const { dailyLayout } = useSelector(selectDaily());

  const renderLandscape = (m: number, startDate: number) => {
    const weeks = getWeekDates(2023, m, startDate);
    const elms = weeks.map((w) => {
      const heading = moment().year(2023).month(m).format("MMMM YYYY");
      const description = `${w[0].format("DD MMMM")} - ${w[w.length - 1].format(
        "DD MMMM"
      )}`;

      if (weeklyLayout === WeeklyType.Boxed) {
        let firstWeek = 0;
        return (
          <>
            <Weekly1
              id={`${String(m)}-${String(firstWeek++)}`}
              heading={heading}
              description={description}
              days={w}
              key={m}
            />
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else if (weeklyLayout === WeeklyType.Hourly) {
        let firstWeek = 0;
        return (
          <>
            <Weekly2
              id={`${String(m)}-${String(firstWeek++)}`}
              heading={heading}
              description={description}
              key={m}
            />
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else if (weeklyLayout === WeeklyType.Lined) {
        let firstWeek = 0;
        return (
          <>
            <Weekly3
              id={`${String(m)}-${String(firstWeek++)}`}
              heading={heading}
              description={description}
              key={m}
            />
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else {
        let firstWeek = 0;
        return (
          <>
            <Weekly4
              id={`${String(m)}-${String(firstWeek++)}`}
              heading={heading}
              description={description}
              days={w}
              key={m}
            />
          </>
        );
      }
    });

    return elms;
  };

  const elms = months.map((m) => renderLandscape(m, 1));

  return <Document style={{ fontFamily: "Clash Display" }}>{elms}</Document>;
};

export default MainDocument;
