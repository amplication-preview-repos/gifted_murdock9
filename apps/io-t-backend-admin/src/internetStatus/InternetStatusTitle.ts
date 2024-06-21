import { InternetStatus as TInternetStatus } from "../api/internetStatus/InternetStatus";

export const INTERNETSTATUS_TITLE_FIELD = "id";

export const InternetStatusTitle = (record: TInternetStatus): string => {
  return record.id?.toString() || String(record.id);
};
