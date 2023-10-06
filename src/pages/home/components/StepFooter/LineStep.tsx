import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";

interface Props {
  currStep: number;
}
export default function LineStep({ currStep }: Props) {
  const { current } = useSelector(selectStep());
  return <div className={`w-[40px] h-[0.5px] ${current < currStep ? "bg-[#E1E1E1]" : "bg-black"}`}></div>;
}
