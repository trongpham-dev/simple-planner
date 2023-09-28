import { Document, Font } from "@react-pdf/renderer";
import { Weekly4 } from "./weekly/Weekly4";
import { Weekly2 } from "./weekly/Weekly2";
import { selectWeekly } from "stores/reducers/weekly";
import { Orientation, WeeklyType } from "models/enum";
import { Weekly1 } from "./weekly/Weekly1";
import { useSelector } from "react-redux";
import clashDisplayRegular from "./../assets/fonts/ClashDisplay-Regular.otf";
import clashDisplayBold from "./../assets/fonts/ClashDisplay-Bold.otf";
import { getWeekDates } from "common/dayTimeUtils";
import moment from "moment";
import { DailyRendering } from "common/plannerRendering";
import { selectDaily } from "stores/reducers/daily";
import { Weekly3 } from "./weekly/Weekly3";
import { selectTheme } from "stores/reducers/theme";
import { PortraitDaily1 } from "./daily/Daily1/PortraitDaily1";
import { PortraitWeekly1 } from "./weekly/Weekly1/PortraitWeekly1";
import { PortraitWeekly2 } from "./weekly/Weekly2/PortraitWeekly2";
import { PortraitWeekly3 } from "./weekly/Weekly3/PortraitWeekly3";
import { PortraitWeekly4 } from "./weekly/Weekly4/PortraitWeekly4";
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
  const { orientation } = useSelector(selectTheme());
  const { weeklyLayout } = useSelector(selectWeekly());
  const { dailyLayout } = useSelector(selectDaily());

  const renderLandscape = (m: number, startDate: number) => {
    const weeks = getWeekDates(2023, m, startDate);
    const elms = weeks.map((w) => {
      const heading = moment().year(2023).month(m).format("MMMM YYYY");
      const description = `${w[0].format("DD MMMM")} - ${w[w.length - 1].format("DD MMMM")}`;

      let firstWeek = 0;
      if (weeklyLayout === WeeklyType.Boxed) {
        return (
          <>
            {orientation === Orientation.Landscape ? (
              <Weekly1 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            ) : (
              <PortraitWeekly1 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            )}
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else if (weeklyLayout === WeeklyType.Hourly) {
        return (
          <>
            {orientation === Orientation.Landscape ? (
              <Weekly2 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            ) : (
              <PortraitWeekly2 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            )}

            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else if (weeklyLayout === WeeklyType.Lined) {
        return (
          <>
            {orientation === Orientation.Landscape ? (
              <Weekly3 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} key={m} days={w} />
            ) : (
              <PortraitWeekly3 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} key={m} days={w} />
            )}
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
          </>
        );
      } else {
        return (
          <>
            {orientation === Orientation.Landscape ? (
              <Weekly4 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            ) : (
              <PortraitWeekly4 id={`${String(m)}-${String(firstWeek++)}`} heading={heading} description={description} days={w} key={m} />
            )}
            {w.map((d, i) => DailyRendering(dailyLayout!, d, i))}
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
