import { PlaningStep } from "models/enum";
import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";
import { selectTheme } from "stores/reducers/theme";

export default function OrientationStep() {
  const { step } = useSelector(selectStep());
  const { orientation } = useSelector(selectTheme());

  const isActive = step === PlaningStep.S1_Orientation;

  const getContent = () => {
    if (step < PlaningStep.S1_Orientation) return "01";
    if (orientation) return orientation.toUpperCase();
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
          step < PlaningStep.S1_Orientation ? "right-[57px]" : "right-[30.5px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {step < PlaningStep.S1_Orientation ? "STEP" : "ORIENTATION"}
        </span>
      </div>
    </div>
  );
}
