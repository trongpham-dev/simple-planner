import { PDFDownloadLink } from "@react-pdf/renderer";
import MainDocument from "./pages/MainDocument";

function App() {
  return (
    <PDFDownloadLink document={<MainDocument />} fileName="digital-planner.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
    // <MainDocument />
  );
}

// test

export default App;
