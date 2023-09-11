import { Orientation } from "models/enum";

export const isLandscape = (orientation: Orientation | undefined) => orientation === Orientation.Landscape;
export const isPortrait = (orientation: Orientation | undefined) => orientation === Orientation.Portrait;
