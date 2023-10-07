import ColorStep from "./ColorStep";
import DailyStep from "./DailyStep";
import LineStep from "./LineStep";
import OrientationStep from "./OrientationStep";
import StartDayStep from "./StartDayStep";
import WeeklyStep from "./WeeklyStep";

export default function StepFooter() {
  return (
    <div className="h-[100px] flex justify-center items-center border-t border-[#E1E1E1]">
      <div className="flex justify-center items-center gap-[4px]">
        <OrientationStep />
        <LineStep currStep={1} />
        <ColorStep />
        <LineStep currStep={2} />
        <WeeklyStep />
        <LineStep currStep={3} />
        <StartDayStep />
        <LineStep currStep={4} />
        <DailyStep />
      </div>
    </div>
  );
}
