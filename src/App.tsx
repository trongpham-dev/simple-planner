import { Font, PDFViewer } from "@react-pdf/renderer";

import { Weekly3 } from "pages/weekly/Weekly3";
import clashDisplay from "./assets/fonts/ClashDisplay-Regular.ttf";

Font.register({
  family: "Clash Display",
  src: clashDisplay,
});

function App() {
  return (
    // <PDFDownloadLink document={<MainDocument />} fileName="digital-planner.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? "Loading document..." : "Download now!"
    //   }
    // </PDFDownloadLink>

    <PDFViewer className="w-full h-full">
      <Weekly3 />
      {/* <Weekly4 /> */}
    </PDFViewer>
  );
}

// test

export default App;
