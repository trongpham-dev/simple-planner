import { Font, PDFViewer } from "@react-pdf/renderer";

import { Weekly3 } from "pages/weekly/Weekly3";
import clashDisplay from "./assets/fonts/ClashDisplay-Regular.ttf";
import { Weekly2 } from "pages/weekly/Weekly2";
import { Weekly4 } from "pages/weekly/Weekly4";
import { Daily1 } from "pages/daily/Daily1";
import { Weekly1 } from "pages/weekly/Weekly1";

Font.register({
  family: "Clash Display",
  src: clashDisplay,
});

function App() {
  return (
    <PDFViewer className="w-full h-full">
      <Weekly1 />
      {/* <Weekly2 /> */}
      {/* <Weekly3 /> */}
      {/* <Weekly4 /> */}
      {/* <Daily1 /> */}
    </PDFViewer>
  );
}

// test

export default App;
