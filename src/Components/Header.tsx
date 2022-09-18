import Download from "./Download";
import { useRef } from "react";

import ReactToPrint from "react-to-print";
import Document from "./Document";

type Props = {
  page: string;
};

const Header = ({ page }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <header className='bg-white shadow'>
      <div className='h-0 w-0 overflow-hidden'>
        <Document eRef={ref} />
      </div>

      <div className='mx-auto max-w-7xl py-6 px-8'>
        <h1 className='text-3xl font-bold tracking-tight mb-4 text-gray-900'>
          Multiple Comparison Analysis
        </h1>
        <div className='flex'>
          <div>
            <p>
              This report encapsulates comparisons amongst your selected
              portfolios Pages Audits across all health metrics over a range of
              devices, networks and locations
            </p>
          </div>
          <Download eRef={ref} />
          {/* <div>
            <ReactToPrint
              trigger={() => <button>v2</button>}
              content={() => ref.current}
            />
          </div> */}
        </div>
        <h3 className='text-2xl mt-4 font-bold tracking-tight -mb-2 text-gray-900'>
          {page}
        </h3>
      </div>
    </header>
  );
};

export default Header;
