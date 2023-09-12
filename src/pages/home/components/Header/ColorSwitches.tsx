import { ColorType } from "models/enum";
import ColorSwitchItem from "pages/home/components/Header/ColorSwitchItem";

export default function ColorSwitches() {
  return (
    <div className="flex gap-4">
      <ColorSwitchItem colorType={ColorType.Primary} shadowColor="#EEE7DF" />
      <ColorSwitchItem colorType={ColorType.Secondary} shadowColor="#E7EBDB" />
      <ColorSwitchItem colorType={ColorType.Tertiary} shadowColor="#F4E8FA" />
    </div>
  );
}
