import { useSelector } from "react-redux";
import { selectWeeklyStart } from "stores/reducers/start";
import { selectStep } from "stores/reducers/step";

const getContent = (startAt: number | undefined, step: number) => {
  if (step === 0) return "04";
  if (startAt && startAt === 0) return "MONDAY";
  if (startAt && startAt === 1) return "SUNDAY";
  return "--";
};

export default function StartDayStep() {
  const { step, current } = useSelector(selectStep());
  const { startAt } = useSelector(selectWeeklyStart());
  return (
    <div
      className={`flex w-[168px] h-[48px] p-[16px_10px_10px_10px] justify-center items-center gap-[10px] bg-[#FFF] ${
        current === 5 ? "border-[black]" : "border-[#E1E1E1]"
      }  border relative`}
    >
      <span className="font-semibold">{getContent(startAt, current)}</span>
      <div
        className={`flex p-[0px_10px_4px_10px] justify-center items-center gap-[10px] absolute ${
          current === 0 ? "right-[57px]" : "right-[17.5px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {current === 0 ? "STEP" : "WEEK STARS ON"}
        </span>
      </div>
    </div>
  );
}
