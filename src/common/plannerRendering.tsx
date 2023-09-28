import { Moment } from "moment";
import { ColorType, DailyType, Orientation } from "models/enum";
import { Daily1 } from "pages/daily/Daily1";
import { Daily2 } from "pages/daily/Daily2";
import { COLOR } from "constants/color";
import { useSelector } from "react-redux";
import { selectTheme } from "stores/reducers/theme";
import { PortraitDaily1 } from "pages/daily/Daily1/PortraitDaily1";
import { PortraitDaily2 } from "pages/daily/Daily2/PortraitDaily2";

export const DailyRendering = (layout: string, day: Moment, id: number) => {
  const { orientation } = useSelector(selectTheme());

  if (layout === DailyType.Minimal)
    return orientation === Orientation.Landscape ? (
      <Daily1 key={id} day={day} />
    ) : (
      <PortraitDaily1 key={id} day={day} />
    );
  return orientation === Orientation.Landscape ? (
    <Daily2 key={id} day={day} />
  ) : (
    <PortraitDaily2 key={id} day={day} />
  );
};

export const handleBorderBottomColor = (color: string) => {
  if (color === ColorType.Primary) return COLOR.EXTRA_LIGHT_BROWN_2;
  if (color === ColorType.Secondary) return "#e7eadb";
  return "#f1e5f7";
};

export const handleBgColor = (color: string) => {
  if (color === ColorType.Primary) {
    return COLOR.LIGHT_BROWN;
  }
  if (color === ColorType.Secondary) {
    return "#e4e8d8";
  }
  return "#f4e8fA";
};
