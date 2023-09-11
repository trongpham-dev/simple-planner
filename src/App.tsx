import {
  Document,
  Font,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

import { months } from "common/dayTimeUtils";
import MainDocument from "pages/MainDocument";
import { Weekly4 } from "pages/weekly/Weekly4";

import clashDisplayRegular from "./assets/fonts/ClashDisplay-Regular.ttf";
import clashDisplayBold from "./assets/fonts/ClashDisplay-Bold.ttf";
import clashDisplaySemiBold from "./assets/fonts/ClashDisplay-Semibold.ttf";
import clashDisplayMedium from "./assets/fonts/ClashDisplay-Medium.ttf";
import { Daily2 } from "pages/daily/Daily2";
import moment from "moment";
import { Daily1 } from "pages/daily/Daily1";
import { Weekly2 } from "pages/weekly/Weekly2";

Font.register({
  family: "Clash Display",
  format: "truetype",
  fonts: [
    { src: clashDisplayRegular, fontWeight: "normal" },
    { src: clashDisplayBold, fontWeight: "bold" },
    { src: clashDisplayMedium, fontWeight: "medium" },
    { src: clashDisplaySemiBold, fontWeight: "semibold" },
  ],
});

function App() {
  const elms = months.map((m) => (
    <Weekly4 id={m} year={2023} month={m} startDate={1} key={m} />
  ));

  return (
    <PDFViewer className="w-full h-full">
      {/* <Weekly3 /> */}
      <Document>{elms}</Document>
      {/* <MainDocument /> */}
      {/* <Weekly2 /> */}

      {/* <Document>
        <Weekly4 id={1} month={2} year={2023} startDate={2} />

        <Daily1 day={moment()} />
      </Document> */}

      {/* <Daily2 day={moment()} /> */}
    </PDFViewer>

    // <PDFDownloadLink document={<MainDocument />} fileName="somename.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? "Loading document..." : "Download now!"
    //   }
    // </PDFDownloadLink>
  );
}

export default App;
