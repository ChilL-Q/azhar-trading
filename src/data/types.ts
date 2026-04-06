export type SlideLayout = "default" | "list" | "split" | "chart" | "candles" | "diagram" | "icon_center";

export interface SlideData {
  id: number;
  title?: string | null;
  subtitle?: string | null;
  text?: string | null;
  list?: string[];
  layout: SlideLayout;
  icon?: any; 
  visualText?: string | null;
}
