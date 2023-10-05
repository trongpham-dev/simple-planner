import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";

import clashDisplay from "../assets/fonts/ClashDisplay-Regular.ttf";
import React from "react";

Font.register({
  family: "Clash Display",
  src: clashDisplay,
});

const stylesObject = StyleSheet.create({
  dayWeeklyHeader: {
    display: "flex",
    padding: "0px 16px",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  dayWeeklyHeaderLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2px",
  },
  dayWeeklyHeaderContentLeft1: {
    color: "#3D3429",
    fontFamily: "Clash Display",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "40px",
  },
  dayWeeklyHeaderContentLeft2: {
    color: "#3D3429",
    fontFamily: "Clash Display",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    textTransform: "uppercase",
  },
});

const DayWeeklyHeader = () => (
  <View style={stylesObject.dayWeeklyHeader}>
    <View style={stylesObject.dayWeeklyHeaderLeft}>
      <Text style={stylesObject.dayWeeklyHeaderContentLeft1}>August 2023</Text>
      <Text style={stylesObject.dayWeeklyHeaderContentLeft2}>
        07 august - 13 August
      </Text>
    </View>
  </View>
);
export default DayWeeklyHeader;
