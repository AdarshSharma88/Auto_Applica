import React from "react";
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { Dropbox } from "dropbox";

//----------------------------------------------------------------------------------------------------------------------------------------------
const Pdf = () => {
  const dbx = new Dropbox({
    accessToken:
      "sl.Bfk0gooDJZjCbu9cGe1H29fwEjktEyqFkYmMf8z8GVEkAPDixTwiT2VE9iyqTNpZsS6JA_lLlSG2KgNIdFMR5i95wWnftqf9SN6mjwnPFH6j25cjP2aH-rMXmqz1Wy-uAeEhbw8",
  });
  //generating pdf
  console.log(dbx);

  const handleGeneratePDF = async () => {
    const contentElement = document.getElementById("genpdf");

    html2pdf().from(contentElement).save("example.pdf");
    const { pdf } = await html2pdf().from(contentElement).outputPdf();
    uploadPdfToDropbox(pdf);
  };
  const uploadPdfToDropbox = async (pdfFile) => {
    try {
      const response = await dbx.filesUpload({
        path: "/User_applications/example.pdf",
        contents: pdfFile,
      });
      console.log("PDF uploaded successfully", response);
    } catch (error) {
      console.error("Error uploading PDF to Dropbox", error);
    }
  };

  const [signatureImage, setSignatureImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const componentRef = useRef();
  const fileInputRef = useRef();

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    setSignatureImage(file);
    const reader = new FileReader();

    reader.onload = () => {
      setSignatureImage(reader.result);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);

    fileInputRef.current.value = null;
  };

  const validToPrint = () => {
    if (signatureImage) {
      return true;
    }
  };

  return (
    <>
      <div className="pdf flex-wrap m-10 bg-white rounded-lg">
        <div
          className="m-10 text-lg text-black bg-white"
          id="genpdf"
          ref={componentRef}
          contentEditable={"true"}
        >
          To,
          <br />
          The Principal,
          <br />
          (School Name),
          <br />
          (Address).
          <br />
          Subject: Leave Application for Parents of Child
          <br />
          Dear (Sir/madam),
          <br />
          <br />
          With due regard, I want to notify you that my child (name of the
          student) is a student of class (class name), of your school. Due to
          some wellness issues, my boy/girl is hospitalized and is recommended
          to be in a doctor's monitoring for two days. My family members are
          taking care of him/her in hospital, right now and we are not in a
          state to send him/her to school. <br /> <br />
          Hence, I beg you to please understand our position and grant my child
          leave for (mention number of days) from{" "}
          {/* <input
            onChange={handleDateChange1}
            type="date"
            className="bg-white m-2"
          />{" "} */}
          dd-mm-yyyy to{" "}
          {/* <input
            onChange={handleDateChange2}
            type="date"
            className="bg-white m-2"
          /> */}
          dd-mm-yyyy . I am inserting a medical document from the doctor for
          your reference. I ensure you that he/she will attend the school daily
          going forward. <br /> <br />
          Thanking you,
          <br /> <br />
          Yours sincerely, <br />
          (Name of the Parent) <br />
          {!signatureImage && (
            <input
              type="file"
              onChange={handleSignatureUpload}
              ref={fileInputRef}
              accept="image/*"
            />
          )}
          {signatureImage && (
            <img
              src={signatureImage}
              alt="Signature"
              className="signature w-20 mt-10"
            />
          )}{" "}
          <br />
          Signature <br />
        </div>
        {validToPrint() && (
          <button
            className="text-center lg:m-10 ml-auto mr-auto sm:ml-0 sm:mr-3 bg-cyan-400 rounded-lg text-lg p-1 w-20 mt-10"
            onClick={handleGeneratePDF}
          >
            {" "}
            Print
          </button>
        )}
      </div>
    </>
  );
};

export default Pdf;
