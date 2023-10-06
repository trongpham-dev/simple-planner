import { Steps } from "antd";
import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";
import LineStep from "./LineStep";
import { selectTheme } from "stores/reducers/theme";
import OrientationStep from "./OrientationStep";
import ColorStep from "./ColorStep";
import WeeklyStep from "./WeeklyStep";
import StartDayStep from "./StartDayStep";
import DailyStep from "./DailyStep";

export default function StepFooter() {
  return (
    <div className="h-[100px] flex justify-center items-center border-t border-[#E1E1E1]">
      {/* <Steps className="w-[230px]" current={current} items={[{}, {}, {}]} size="default" /> */}
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
