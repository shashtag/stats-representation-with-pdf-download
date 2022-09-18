export {};
declare global {
  type WebPageType = {
    portfolioName: string;
    pageName: string;
    id: string;
  };

  type BarValueType = {
    value: number;
    display: string | number;
    id: string;
  };
  type AuditDetailsType = {
    id: string;
    network: string;
    device: string;
    region: string;
    createdAt: string;
  };
}
