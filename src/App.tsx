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
import moment from "moment";
import { Weekly3 } from "pages/weekly/Weekly3";
import { Weekly4 } from "pages/weekly/Weekly4";
import { Daily1 } from "pages/daily/Daily1";
import { Daily2 } from "pages/daily/Daily2";

function App() {
  // const elms = months.map((m) => <Weekly1 id={m} year={2023} month={m} startDate={1} key={m} />);
  return (
    <Provider store={store}>
      <Home />
      {/* {elms} */}
    </Provider>
  );
  // return (
  //   <PDFViewer className="w-full h-full">
  //     <Provider store={store}>
  //       <Document>
  //         {/* <Daily1 day={moment()} /> */}

  //         {/* <PortraitDaily1 day={moment()} /> */}
  //         {/* <PortraitDaily2 day={moment()} /> */}

  //         {/* <Weekly4
  //           id="1"
  //           days={[moment(), moment(), moment(), moment(), moment(), moment(), moment()]}
  //           heading="heading"
  //           description="description"
  //         /> */}

  //         <PortraitWeekly1
  //           id="1"
  //           days={[moment(), moment(), moment(), moment(), moment(), moment(), moment()]}
  //           heading="heading"
  //           description="description"
  //         />
  //       </Document>
  //     </Provider>
  //   </PDFViewer>
  // );
}

export default App;
