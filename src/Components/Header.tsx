import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className='bg-white shadow'>
      <div className='mx-auto max-w-7xl py-6 px-8'>
        <h2 className='text-3xl font-bold tracking-tight mb-4 text-gray-900'>
          Multiple Comparison Analysis
        </h2>
        <div className='flex'>
          <div>
            <p>
              This report encapsulates comparisons amongst your selected
              portfolios Pages Audits across all health metrics over a range of
              devices, networks and locations
            </p>
          </div>
          <div className=' shadow flex whitespace-nowrap items-center justify-center rounded-md  bg-indigo-600 px-16 ml-10 cursor-pointer text-base font-medium text-white hover:bg-indigo-700 '>
            Download PDF <ArrowDownTrayIcon className='block h-6 w-6 ml-6' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
