import { InternetStatusWhereInput } from "./InternetStatusWhereInput";
import { InternetStatusOrderByInput } from "./InternetStatusOrderByInput";

export type InternetStatusFindManyArgs = {
  where?: InternetStatusWhereInput;
  orderBy?: Array<InternetStatusOrderByInput>;
  skip?: number;
  take?: number;
};
