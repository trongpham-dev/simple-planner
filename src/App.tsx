import { months } from "common/dayTimeUtils";
import { Weekly1 } from "pages/weekly/Weekly1";
import Home from "pages/home";
import { Provider } from "react-redux";
import { store } from "stores";
import { Document, Font, PDFViewer } from "@react-pdf/renderer";
import { Weekly2 } from "pages/weekly/Weekly2";
import { PortraitDaily1 } from "pages/daily/Daily1/PortraitDaily1";

import { PortraitDaily2 } from "pages/daily/Daily2/PortraitDaily2";
import { PortraitWeekly1 } from "pages/weekly/Weekly1/PortraitWeekly1";
import { PortraitWeekly2 } from "pages/weekly/Weekly2/PortraitWeekly2";
import { PortraitWeekly4 } from "pages/weekly/Weekly4/PortraitWeekly4";
import { PortraitWeekly3 } from "pages/weekly/Weekly3/PortraitWeekly3";

function App() {
  const elms = months.map((m) => <Weekly1 id={m} year={2023} month={m} startDate={1} key={m} />);

  // return (
  //   <Provider store={store}>
  //     <Home />
  //     {elms}
  //   </Provider>
  // );

  return (
    <PDFViewer className="w-full h-full">
      <Provider store={store}>
        <Document>
          {/* <PortraitDaily1 /> */}
          <PortraitDaily2 />
          {/* <PortraitWeekly1 /> */}
          {/* <PortraitWeekly2 /> */}
          {/* <PortraitWeekly4 /> */}
          {/* <PortraitWeekly3 /> */}
        </Document>
      </Provider>
    </PDFViewer>
  );

  // return (
  //   <PDFViewer className="w-full h-full">
  //     <Provider store={store}>
  //       <Document>
  //         {/* <PortraitDaily1 /> */}
  //         {/* <PortraitDaily2 /> */}
  //         <PortraitWeekly1 />
  //       </Document>
  //     </Provider>
  //   </PDFViewer>
  // );
}

export default App;

// <PDFViewer className="w-full h-full">
{
  /* <Weekly3 /> */
}
{
  /* <Document>{elms}</Document> */
}
{
  /* <MainDocument /> */
}
{
  /* <Weekly2 /> */
}

{
  /* <Document>
        <Weekly4 id={1} month={2} year={2023} startDate={2} />

        <Daily1 day={moment()} />
      </Document> */
}

{
  /* <Daily2 day={moment()} /> */
}
// </PDFViewer>

// <PDFDownloadLink document={<MainDocument />} fileName="somename.pdf">
//   {({ blob, url, loading, error }) =>
//     loading ? "Loading document..." : "Download now!"
//   }
// </PDFDownloadLink>
