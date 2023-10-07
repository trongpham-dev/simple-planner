import { ThemeColors } from "common/plannerOptions";

interface Props {
  colorType: string;
  shadowColor: string;
}
export default function ColorSwitchItem({ colorType, shadowColor }: Props) {
  return (
    <button
      className={`flex p-[8px] justify-center items-start gap-[-8px] border border-[#E1E1E1] border-solid bg-[#FFF]`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill={ThemeColors.get(colorType)} />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill={shadowColor} />
      </svg>
    </button>
  );
}
