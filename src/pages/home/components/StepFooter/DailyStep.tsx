import { useSelector } from "react-redux";
import { selectDaily } from "stores/reducers/daily";
import { selectStep } from "stores/reducers/step";

const getContent = (dailyLayout: string | undefined, step: number) => {
  if (step === 0) return "05";
  if (dailyLayout) return dailyLayout.toUpperCase();
  return "--";
};

export default function DailyStep() {
  const { step, current } = useSelector(selectStep());
  const { dailyLayout } = useSelector(selectDaily());
  return (
    <div
      className={`flex w-[168px] h-[48px] p-[16px_10px_10px_10px] justify-center items-center gap-[10px] bg-[#FFF] ${
        current === 5 ? "border-[black]" : "border-[#E1E1E1]"
      }  border relative`}
    >
      <span className="font-semibold">{getContent(dailyLayout, current)}</span>
      <div
        className={`flex p-[0px_10px_4px_10px] justify-center items-center gap-[10px] absolute  ${
          current === 0 ? "right-[57px]" : "right-[26.5px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {current === 0 ? "STEP" : "DAILY LAYOUT"}
        </span>
      </div>
    </div>
  );
}
