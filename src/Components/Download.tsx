import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import { jsPDF } from "jspdf";

type Props = {
  eRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Download = ({ eRef }: Props) => {
  const handleDownload = () => {
    if (eRef.current) {
      // console.log(eRef.current);
      // htmlToImage.toPng(eRef.current, { quality: 1 }).then(function (dataUrl) {
      //   const pdf = new jsPDF();
      //   const imgProps = pdf.getImageProperties(dataUrl);
      //   const pdfWidth = pdf.internal.pageSize.getWidth();
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      //   // const x = 0;
      //   // let y = 0;
      //   // const
      //   pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      //   pdf.link(5, 5, 33, 12, { url: "https://www.auditzy.com/" });
      //   pdf.save("download.pdf");
      // });
      var doc = new jsPDF({
        unit: "px",
        format: [eRef.current.clientHeight + 5, window.innerWidth],
      });
      doc.html(eRef.current, {
        callback: function (doc) {
          doc.save("Auditzy Insights");
        },
        autoPaging: "text",
        x: 0,
        y: 0,
        // windowWidth:,
      });
    }
  };
  return (
    <>
      <div
        className=' shadow flex whitespace-nowrap items-center justify-center rounded-md  bg-indigo-600 px-16 ml-10 cursor-pointer text-base font-medium text-white hover:bg-indigo-700 '
        onClick={() => {
          handleDownload();
        }}>
        Download PDF <ArrowDownTrayIcon className='block h-6 w-6 ml-6' />
      </div>
    </>
  );
};

export default Download;
