import { Font, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import { months } from "common/dayTimeUtils";
import MainDocument from "pages/MainDocument";
import { Weekly4 } from "pages/weekly/Weekly4";

import clashDisplay from "./assets/fonts/ClashDisplay-Regular.ttf";

Font.register({
  family: "Clash Display",
  format: "truetype",
  fontWeight: "normal",
  src: clashDisplay,
});

function App() {
  const elms = months.map((m) => (
    <Weekly4 id={m} year={2023} month={m} startDate={1} key={m} />
  ));

  return (
    <PDFViewer className="w-full h-full">
      {/* <Weekly2 /> */}
      {/* <Weekly3 /> */}
      {/* <Document>{elms}</Document> */}
      <MainDocument />
      {/* <Daily1 /> */}
    </PDFViewer>

    // <PDFDownloadLink document={<MainDocument />} fileName="somename.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? "Loading document..." : "Download now!"
    //   }
    // </PDFDownloadLink>
  );
}

export default App;
