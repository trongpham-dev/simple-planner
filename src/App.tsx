import { months } from "common/dayTimeUtils";
import { Weekly1 } from "pages/weekly/Weekly1";
import Home from "pages/home";
import { Provider } from "react-redux";
import { store } from "stores";

function App() {
  const elms = months.map((m) => (
    <Weekly1 id={m} year={2023} month={m} startDate={1} key={m} />
  ));

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
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
