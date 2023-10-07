import { ColorType, PlaningStep } from "models/enum";
import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";
import { selectTheme } from "stores/reducers/theme";

export default function ColorStep() {
  const { step } = useSelector(selectStep());
  const { color } = useSelector(selectTheme());

  const isActive = step === PlaningStep.S2_Color;

  const getContent = () => {
    if (step < PlaningStep.S2_Color) return "02";
    if (color && color === ColorType.Primary) return "BEIGE";
    if (color && color === ColorType.Secondary) return "MOSS";
    if (color && color === ColorType.Tertiary) return "PURPLE";
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
          step < PlaningStep.S2_Color ? "right-[57px]" : "right-[51px]"
        }  top-[-8px] bg-[#FFF]`}
      >
        <span className="text-[color:var(--greyscale-2,#C7C7C7)] text-xs not-italic font-semibold leading-4 tracking-[0.24px] uppercase">
          {step < PlaningStep.S2_Color ? "STEP" : "COLOR"}
        </span>
      </div>
    </div>
  );
}
