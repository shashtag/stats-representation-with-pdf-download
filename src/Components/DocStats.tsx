import React from "react";
import StatsRep from "./StatsRep";

type Props = {
  max: number;
  webPages: WebPageType[];
  barValues: BarValueType[];
  auditDetails: AuditDetailsType[];
  children: string;
  title: string;
};

const DocStats: React.FC<Props> = ({
  max,
  webPages,
  barValues,
  auditDetails,
  children,
  title,
}) => {
  return (
    <>
      <div className='bg-[#e2e8f5] mt-8 p-8 rounded-t-md  '>
        <h4 className='text-2xl font-extrabold text-[#6E83EA]  '>{title}</h4>
        <p className='mt-1'>{children}</p>
      </div>

      <div className='bg-gray-200 rounded-b-md p-8'>
        <StatsRep
          doc={true}
          max={max}
          webPages={webPages}
          barValues={barValues}
          auditDetails={auditDetails}
        />
      </div>
    </>
  );
};

export default DocStats;
