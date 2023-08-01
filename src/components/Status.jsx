import React from "react";
import { useState, useEffect } from "react";
import { Dropbox } from "dropbox";

const Status = () => {
  const dbx = new Dropbox({
    accessToken:
      "sl.Bfk0gooDJZjCbu9cGe1H29fwEjktEyqFkYmMf8z8GVEkAPDixTwiT2VE9iyqTNpZsS6JA_lLlSG2KgNIdFMR5i95wWnftqf9SN6mjwnPFH6j25cjP2aH-rMXmqz1Wy-uAeEhbw8",
  });

  let dropboxFilePath = "/User_applications/example.pdf";
  // const downloadPdfFromDropbox = async (dropboxFilePath) => {
  //   try {
  //     const response = await dbx.filesDownload({
  //       path: dropboxFilePath,
  //     });

  //     const blob = response.fileBlob;
  //     const url = URL.createObjectURL(blob);
  //     return url;

  //     // Use the 'url' to download the PDF file to a local path
  //     // For example, you can use the 'downloadjs' library:
  //     // download(url, localFilePath);
  //   } catch (error) {
  //     console.error("Error downloading PDF from Dropbox", error);
  //     return null;
  //   }
  // };
  // const displayPdf = async (dropboxFilePath) => {
  //   const pdfUrl = await downloadPdfFromDropbox(dropboxFilePath);
  //   if (pdfUrl) {
  //     const pdfViewer = document.getElementById("pdfViewer");
  //     console.log(pdfUrl);
  //     pdfViewer.src = pdfUrl;
  //   }
  // };
  // displayPdf(dropboxFilePath);
  //-----------------------------------------===================================================================================================

  const [pdfDataUrl, setPdfDataUrl] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(dropboxFilePath);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const dataUrl = reader.result;
          setPdfDataUrl(dataUrl);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error fetching PDF from Dropbox", error);
        setPdfDataUrl(null);
      }
    };

    fetchPdf();
  }, [dropboxFilePath]);

  return (
    <div>
      {pdfDataUrl ? (
        <iframe
          src={pdfDataUrl}
          title="PDF Viewer"
          width="100%"
          height="600px"
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default Status;
