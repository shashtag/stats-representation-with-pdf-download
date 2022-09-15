import React from "react";

type Props = { max: number; webPages: WebPageType[] };

const StatsRep = ({ max, webPages }: Props) => {
  return (
    <div className='grid  grid-cols-stats '>
      <div>
        {webPages.map((webPage: WebPageType) => (
          <div key={webPage.pageName} className='p-4 '>
            <div>{webPage.portfolioName}</div>
            <div>{webPage.pageName}</div>
          </div>
        ))}
      </div>
      <div className=' relative rounded-lg border-2 border-dashed border-gray-500 border-collapse'>
        <div className='grid grid-cols-10 h-full w-full absolute '>
          <div></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
          <div className='border-l-2 border-dashed border-gray-500 '></div>
        </div>
        aa
      </div>
    </div>
  );
};

export default StatsRep;
