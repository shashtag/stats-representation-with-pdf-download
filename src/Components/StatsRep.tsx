type Props = {
  max: number;
  webPages: WebPageType[];
  barValues: BarValueType[];
  auditDetails: AuditDetailsType[];
  rev?: boolean;
};

const StatsRep = ({ max, webPages, barValues, auditDetails, rev }: Props) => {
  return (
    <div className='grid grid-cols-stats '>
      <div>
        {webPages.map((webPage: WebPageType) => (
          <div key={webPage.pageName} className='p-6'>
            <div>{webPage.portfolioName}</div>
            <div>{webPage.pageName}</div>
          </div>
        ))}
      </div>
      <div className=' relative rounded-lg border-2 border-dashed border-gray-500 border-collapse'>
        <div className='z-0 grid grid-cols-10 h-full w-full absolute '>
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
        <div className='absolute w-full h-full -top-6 '>
          {barValues?.map((value, i) => {
            let percent = (value.value * 100) / max;

            return (
              <div className='my-10 ' key={value.id}>
                <div className='bg-white capitalize w-max'>
                  {auditDetails[i].device}, {auditDetails[i].region},{" "}
                  {auditDetails[i].network},{" "}
                  {new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "full",
                  }).format(new Date(auditDetails[i].createdAt))}
                </div>
                <div
                  style={{
                    width: `${percent}%`,
                    background: rev
                      ? percent <= 90
                        ? "#1D893E"
                        : percent <= 95
                        ? "#F1B44C"
                        : "#EB201F"
                      : percent >= 90
                      ? "#1D893E"
                      : percent >= 80
                      ? "#F1B44C"
                      : "#EB201F",
                  }}
                  className='rounded-r-md h-8 flex align-middle justify-end'>
                  <div className='flex mx-2 mt-1 text-white font-bold'>
                    {value.display}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsRep;
