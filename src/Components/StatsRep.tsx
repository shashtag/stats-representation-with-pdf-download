type Props = {
  max: number;
  webPages: WebPageType[];
  barValues: BarValueType[];
  auditDetails: AuditDetailsType[];
  rev?: boolean;
  doc?: boolean;
};

const StatsRep = ({
  max,
  webPages,
  barValues,
  auditDetails,
  rev,
  doc,
}: Props) => {
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
          <div>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              0
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 1 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 2 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 3 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 4 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 5 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 6 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 7 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 8 + Number.EPSILON) / 1000}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-500 '>
            <div
              className={
                doc
                  ? "-translate-x-[50%] w-max absolute -bottom-4"
                  : "-translate-x-[50%] w-max absolute -bottom-7"
              }>
              {Math.round((max / 10) * 9 + Number.EPSILON) / 1000}
            </div>
            <div
              className={
                doc
                  ? "translate-x-[50%] right-0 w-max absolute -bottom-4"
                  : "translate-x-[50%] right-0 w-max absolute -bottom-7"
              }>
              {Math.round(max + Number.EPSILON) / 1000}
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full -top-6 '>
          {barValues?.map((value, i) => {
            let percent = rev
              ? (value.value * 100) / max
              : (value.value * 100000) / max;

            return (
              <div className='my-10 ' key={value.id}>
                <div
                  className={
                    doc
                      ? "bg-gray-200 capitalize w-max -translate-y-2"
                      : "bg-white capitalize w-max"
                  }>
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
                  <div
                    className={
                      doc
                        ? "flex mx-2 mt-1 text-white font-bold -translate-y-2"
                        : "flex mx-2 mt-1 text-white font-bold"
                    }>
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
