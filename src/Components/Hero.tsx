import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import navigation from "../Data/navigation";
import Nav from "./Nav";

export default function Hero() {
  const [page, setPage] = useState("Performance");
  return (
    <div className='min-h-full'>
      <Nav page={page} setPage={setPage} />
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-6 px-8'>
          <h2 className='text-3xl font-bold tracking-tight mb-4 text-gray-900'>
            Multiple Comparison Analysis
          </h2>
          <div className='flex'>
            <div>
              <p>
                This report encapsulates comparisons amongst your selected
                portfolios Pages Audits across all health metrics over a range
                of devices, networks and locations
              </p>
            </div>
            <div className=' shadow flex whitespace-nowrap items-center justify-center rounded-md  bg-indigo-600 px-16 ml-10 cursor-pointer text-base font-medium text-white hover:bg-indigo-700 '>
              Download PDF <ArrowDownTrayIcon className='block h-6 w-6 ml-6' />
            </div>
          </div>
        </div>
      </header>
      <main className='bg-gray-200 mx-auto max-w-7xl p-8'>
        <div className='bg-white shadow rounded-md p-8'>ss</div>
      </main>
    </div>
  );
}
