import { Document, PDFViewer, Page, View } from "@react-pdf/renderer";
import Weekly from "./weekly/Weekly";

const MainDocument = () => (
  <Document>
    <Page>
      <View>
        <div className="flex w-[842px] h-[595px] p-[12px] justify-center items-center p-[12px]">
          <div className="flex w-[818px] h-[571px] items-start shrink-0">
            <Weekly />
          </div>
        </div>
      </View>
    </Page>
  </Document>
);

export default MainDocument;
