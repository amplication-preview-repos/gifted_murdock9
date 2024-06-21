import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InternetStatusWhereInput = {
  id?: StringFilter;
  status?: BooleanNullableFilter;
};
