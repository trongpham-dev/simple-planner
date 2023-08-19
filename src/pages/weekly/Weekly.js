import DayWeekly from "../../components/DayWeekly";
import DayWeeklyNotes from "../../components/DayWeeklyNotes";

const Weekly = () => (
  <div className="flex flex-[1_0_0] flex-wrap p-[0px_12px] items-center justify-center content-center gap-[12px] self-stretch ">
    <DayWeekly />
    <DayWeekly />
    <DayWeekly />
    <DayWeekly />
    <DayWeekly />
    <DayWeekly />
    <DayWeekly />
    <DayWeeklyNotes />
  </div>
);

export default Weekly;
