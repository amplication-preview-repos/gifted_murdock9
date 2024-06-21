import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  measurements?: MeasurementListRelationFilter;
  name?: StringNullableFilter;
  sex?: "Option1";
  username?: StringFilter;
};
