export enum ColorType {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}

export enum Orientation {
  Portrait = "Portrait",
  Landscape = "Landscape",
}

export enum WeeklyType {
  Boxed = "Boxed",
  Hourly = "Hourly",
  Lined = "Lined",
  Vertical = "Vertical",
}

export enum DailyType {
  Minimal = "Minimal",
  Structured = "Structured",
}

export enum WeeklyStartType {
  Monday = 1,
  Sunday = 2,
}

export enum PlaningStep {
  S0_Start,
  S1_Orientation,
  S2_Color,
  S3_WeeklyLayout,
  S4_WeeklyStartDate,
  S5_DailyLayout,
  S6_Finish,
  S7_Downloading,
  S8_ThankYou,
}
