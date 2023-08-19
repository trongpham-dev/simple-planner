import { Text } from "@react-pdf/renderer";

const DayWeekly = () => (
  <div className="flex flex-col items-center w-[182px] h-[230px] bg-[#FBF9F7] p-[8px_8px_24px_8px]">
    <div className="flex items-start p-[0px_8px_4px_8px] gap-[4px] self-stretch border-b-[0.5px] border-solid border-b-[#907B62]">
      <span className="text-[#907B62] text-[12px] not-italic font-[Clash Display] font-semibold leading-4">
        <Text>07</Text>
      </span>

      <span className="text-[#907B62] text-[12px] not-italic font-[Clash Display] font-normal leading-4">
        <Text>Monday</Text>
      </span>
    </div>
    <div className="flex-[1_0_0] flex-col items-start self-stretch">
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
      <div className="flex-[1_0_0] p-[5px_4px] items-center gap-[10px] self-stretch border-b-[0.5px] border-solid border-b-[#EEE7DF]"></div>
    </div>
  </div>
);

export default DayWeekly;
