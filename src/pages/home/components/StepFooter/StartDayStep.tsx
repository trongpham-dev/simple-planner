import { PlaningStep, WeeklyStartType } from "models/enum";
import { useSelector } from "react-redux";
import { selectWeeklyStart } from "stores/reducers/start";
import { selectStep } from "stores/reducers/step";

export default function StartDayStep() {
  const { step } = useSelector(selectStep());
  const { startAt } = useSelector(selectWeeklyStart());

  const isActive = step === PlaningStep.S4_WeeklyStartDate;

  const getContent = () => {
    if (step < PlaningStep.S4_WeeklyStartDate) return "04";
    if (startAt && startAt === WeeklyStartType.Monday) return "MONDAY";
    if (startAt && startAt === WeeklyStartType.Sunday) return "SUNDAY";
    return "--";
  };

  return (
    <div
      className={`flex w-[168px] h-[48px] p-[16px_10px_10px_10px] justify-center items-center gap-[10px] bg-[#FFF] ${
        isActive ? "border-[black]" : "border-[#E1E1E1]"
      }  border relative`}
    >
      <span className="font-semibold">{getContent()}</span>
      <div
        className={`flex p-[0px_10px_4px_10px] justify-center items-center gap-[10px] absolute ${
          step < PlaningStep.S4_WeeklyStartDate ? "right-[57px]" : "right-[17.5px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {step < PlaningStep.S4_WeeklyStartDate ? "STEP" : "WEEK STARS ON"}
        </span>
      </div>
    </div>
  );
}
