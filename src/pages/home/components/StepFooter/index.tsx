import { Steps } from "antd";
import { useSelector } from "react-redux";
import { selectStep } from "stores/reducers/step";

export default function StepFooter() {
  const { current } = useSelector(selectStep());

  return (
    <div className="h-[100px] flex justify-center items-center border-t border-[#E1E1E1]">
      <Steps
        className="w-[230px]"
        current={current}
        items={[{}, {}, {}]}
        size="default"
      />
    </div>
  );
}
