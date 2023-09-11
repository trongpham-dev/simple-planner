import { Switch } from "antd";

export default function ColorSwitchItem() {
  const handleChange = () => {
    console.log("change");
  };

  return <Switch defaultChecked onChange={handleChange} />;
}
