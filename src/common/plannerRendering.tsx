import { Moment } from "moment";
import { DailyType } from "models/enum";
import { Daily1 } from "pages/daily/Daily1";
import { Daily2 } from "pages/daily/Daily2";

export const DailyRendering = (layout: string, day: Moment, id: number) => {
  if (layout === DailyType.Minimal) return <Daily1 key={id} day={day} />;
  return <Daily2 key={id} day={day} />;
};
