import React from "react";
import { ReactToPrint } from "react-to-print";
import { saveAs } from "file-saver";
// import PrintableComponent from "./PrintableComponent";
import PrintableSection from "./PrintableSection";

class PDFGenerator extends React.Component {
  handleGeneratePDF = () => {
    const pdfContent = this.componentRef.handlePrint();
    const pdfBlob = new Blob([pdfContent], { type: "application/pdf" });
    saveAs(pdfBlob, "example.pdf"); // Save the PDF locally
    this.uploadPDFToDrive(pdfBlob); // Upload the PDF to Google Drive
  };

  uploadPDFToDrive = async (pdfBlob) => {
    try {
      const auth = await window.gapi.auth2.getAuthInstance();
      const drive = window.gapi.client.drive;

      // Create the file metadata
      const fileMetadata = {
        name: "example.pdf", // Set the desired filename
      };

      // Create the file content from the PDF Blob
      const media = {
        mimeType: "application/pdf",
        body: pdfBlob,
      };

      // Upload the file to Google Drive
      const response = await drive.files.create({
        resource: fileMetadata,
        media,
        fields: "id", // Specify the fields to retrieve after the upload (optional)
      });

      console.log("File uploaded successfully. File ID:", response.result.id);
    } catch (error) {
      console.error("Error uploading PDF to Google Drive:", error);
    }
  };

  render() {
    return (
      <div>
        {/* Component that will be printed */}
        <ReactToPrint
          trigger={() => (
            <button onClick={this.handleGeneratePDF}>Generate PDF</button>
          )}
          content={() => this.componentRef}
        />
        <PrintableSection ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PDFGenerator;
