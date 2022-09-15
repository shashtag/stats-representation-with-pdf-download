import { useEffect, useRef, useState } from "react";
import apiData from "../Data/apiData";

const useFormatData = () => {
  const firstMount = useRef(true);

  const [performances, setPerformances] = useState<BarValueType[]>([]);
  const [accessibility, setAccessibility] = useState<BarValueType[]>([]);
  const [seo, setSeo] = useState<BarValueType[]>([]);
  const [pwa, setPwa] = useState<BarValueType[]>([]);
  const [bestPractices, setBestPractices] = useState<BarValueType[]>([]);
  const [tti, setTti] = useState<BarValueType[]>([]);
  const [si, setSi] = useState<BarValueType[]>([]);
  const [fcp, setFcp] = useState<BarValueType[]>([]);
  const [lcp, setLcp] = useState<BarValueType[]>([]);
  const [tbt, setTbt] = useState<BarValueType[]>([]);
  const [cls, setCls] = useState<BarValueType[]>([]);
  const [webPages, setWebPages] = useState<WebPageType[]>([]);
  const [auditDetails, setAuditDetails] = useState<AuditDetailsType[]>([]);

  const [maxtti, setMaxtti] = useState(0);
  const [maxsi, setMaxsi] = useState(0);
  const [maxlcp, setMaxlcp] = useState(0);
  const [maxfcp, setMaxfcp] = useState(0);
  const [maxtbt, setMaxtbt] = useState(0);
  const [maxcls, setMaxcls] = useState(0);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      for (let x of apiData) {
        setWebPages((prev) => [
          ...prev,
          { id: x.page, portfolioName: x.portfolioName, pageName: x.pageName },
        ]);
        setAuditDetails((prev) => [
          ...prev,
          {
            id: x.page,
            createdAt: x.createdAt,
            device: x.device,
            network: x.network,
            region: x.region,
          },
        ]);
        setPerformances((prev) => [
          ...prev,
          { id: x.page, value: x.performance, display: x.performance },
        ]);
        setAccessibility((prev) => [
          ...prev,
          { id: x.page, value: x.accessibility, display: x.accessibility },
        ]);
        setPwa((prev) => [
          ...prev,
          { id: x.page, value: x.pwa, display: x.pwa },
        ]);
        setSeo((prev) => [
          ...prev,
          { id: x.page, value: x.seo, display: x.seo },
        ]);
        setTti((prev) => [
          ...prev,
          { id: x.page, value: x.ttiNumericValue, display: x.ttiDisplayValue },
        ]);
        setMaxtti((prev) =>
          x.ttiNumericValue > prev ? x.ttiNumericValue : prev,
        );

        setSi((prev) => [
          ...prev,
          { id: x.page, value: x.siNumericValue, display: x.siDisplayValue },
        ]);
        setMaxsi((prev) => (x.siNumericValue > prev ? x.siNumericValue : prev));
        setFcp((prev) => [
          ...prev,
          { id: x.page, value: x.fcpNumericValue, display: x.fcpDisplayValue },
        ]);
        setMaxfcp((prev) =>
          x.fcpNumericValue > prev ? x.fcpNumericValue : prev,
        );
        setLcp((prev) => [
          ...prev,
          { id: x.page, value: x.lcpNumericValue, display: x.lcpDisplayValue },
        ]);
        setMaxlcp((prev) =>
          x.lcpNumericValue > prev ? x.lcpNumericValue : prev,
        );
        setTbt((prev) => [
          ...prev,
          { id: x.page, value: x.tbtNumericValue, display: x.tbtDisplayValue },
        ]);
        setMaxtbt((prev) =>
          x.tbtNumericValue > prev ? x.tbtNumericValue : prev,
        );
        setCls((prev) => [
          ...prev,
          { id: x.page, value: x.clsNumericValue, display: x.clsDisplayValue },
        ]);
        setMaxcls((prev) =>
          x.clsNumericValue > prev ? x.clsNumericValue : prev,
        );
        setBestPractices((prev) => [
          ...prev,
          { id: x.page, value: x.bestPractices, display: x.bestPractices },
        ]);
      }
    }

    return () => {};
  }, []);

  return {
    webPages,
    performances,
    accessibility,
    seo,
    pwa,
    bestPractices,
    auditDetails,
    tti,
    fcp,
    lcp,
    cls,
    tbt,
    si,
    maxfcp,
    maxtti,
    maxlcp,
    maxsi,
    maxcls,
    maxtbt,
  };
};

export default useFormatData;
