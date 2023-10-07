import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { Progress } from "antd";
import { PDF_FILE_NAME } from "constants/common";
import { saveAs } from "file-saver";
import MainDocument from "pages/MainDocument";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "stores";

export const DownloadingPage = () => {
  const [loadingPercent, setLoadingPercent] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();

    generatePdfDocument();

    const interval = setInterval(() => {
      const DURATION_IN_SECONDS = 60 * 15;

      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000; // Đổi thành giây

      // Tính toán phần trăm hoàn thành
      const percent = (elapsedTime / DURATION_IN_SECONDS) * 90;

      // Cập nhật giá trị tiến trình
      setLoadingPercent(percent);

      // Kết thúc khi đạt 100%
      if (percent >= 90) {
        clearInterval(interval);
      }
    }, 2000); // Cập nhật tiến trình mỗi 100ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generatePdfDocument = async () => {
    console.log("run");
    try {
      const blob = await pdf(
        <Provider store={store}>
          <MainDocument />
        </Provider>
      ).toBlob();
      saveAs(blob, PDF_FILE_NAME);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPercent(100);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-4xl mt-40 text-center uppercase">downloading...</h1>
        <h2 className="font-medium text-2xl mt-3 text-center">{PDF_FILE_NAME}</h2>
        <div className="w-[680px] mt-8">
          <Progress percent={loadingPercent} showInfo={false} strokeColor="#000" />
        </div>
      </div>
    </>
  );
};
