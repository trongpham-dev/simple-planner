import { PlaningStep } from "models/enum";
import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";
import { selectStep } from "stores/reducers/step";

export default function DailyStep() {
  const { step } = useSelector(selectStep());
  const { dailyLayout } = useSelector(selectDaily());

  const isActive = step === PlaningStep.S5_DailyLayout;

  const getContent = () => {
    if (step < PlaningStep.S5_DailyLayout) return "05";
    if (dailyLayout) return dailyLayout.toUpperCase();
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
        className={`flex p-[0px_10px_4px_10px] justify-center items-center gap-[10px] absolute  ${
          step < PlaningStep.S5_DailyLayout ? "right-[57px]" : "right-[26.5px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {step < PlaningStep.S5_DailyLayout ? "STEP" : "DAILY LAYOUT"}
        </span>
      </div>
    </div>
  );
}
