import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import { jsPDF } from "jspdf";

type Props = {
  eRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Download = ({ eRef }: Props) => {
  const handleDownload = () => {
    if (eRef.current) {
      var doc = new jsPDF({
        unit: "px",
        format: [eRef.current.clientHeight + 5, window.innerWidth],
      });
      doc.html(eRef.current, {
        callback: function (doc) {
          doc.save("Insights");
        },
        autoPaging: "text",
        x: 0,
        y: 0,
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
