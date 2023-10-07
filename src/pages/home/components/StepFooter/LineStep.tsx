import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";

interface Props {
  currStep: number;
}
export default function LineStep({ currStep }: Props) {
  const { step } = useSelector(selectStep());
  return <div className={`w-[40px] h-[0.5px] ${step < currStep ? "bg-[#E1E1E1]" : "bg-black"}`}></div>;
}
