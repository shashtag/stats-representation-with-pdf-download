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
}
