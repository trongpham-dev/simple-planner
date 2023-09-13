import { Steps } from "antd";

export default function StepFooter() {
  return (
    <div className="h-[100px] flex justify-center items-center border-t border-[#E1E1E1]">
      <Steps className="w-[230px]" current={1} items={[{}, {}, {}]} size="default" />
    </div>
  );
}
