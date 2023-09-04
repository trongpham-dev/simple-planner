import {
  Document,
  Font,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

import { Weekly3 } from "pages/weekly/Weekly3";
import clashDisplay from "./assets/fonts/ClashDisplay-Regular.ttf";
import { Weekly2 } from "pages/weekly/Weekly2";
import { Weekly4 } from "pages/weekly/Weekly4";
import { Daily1 } from "pages/daily/Daily1";
import moment from "moment";
import MainDocument from "pages/MainDocument";
import { months } from "common/dayTimeUtils";

Font.register({
  family: "Clash Display",
  src: clashDisplay,
});

function App() {
  const elms = months.map((m) => (
    <Weekly4 id={m} year={2023} month={m} startDate={1} key={m} />
  ));

  return (
    // <PDFViewer className="w-full h-full">
    //   {/* <Weekly2 /> */}
    //   {/* <Weekly3 /> */}
    //   <Document>{elms}</Document>
    //   {/* <MainDocument /> */}
    //   {/* <Daily1 /> */}
    // </PDFViewer>

    <PDFDownloadLink document={<MainDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
}

// test

export default App;
