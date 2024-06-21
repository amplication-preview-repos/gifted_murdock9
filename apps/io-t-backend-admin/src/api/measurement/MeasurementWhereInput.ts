import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeasurementWhereInput = {
  averageBloodGlucoseLevel?: FloatNullableFilter;
  averageHeartRate?: IntNullableFilter;
  averageOxygenSaturationLevel?: FloatNullableFilter;
  bloodGlucoseLevel?: FloatNullableFilter;
  heartRate?: IntNullableFilter;
  id?: StringFilter;
  oxygenSaturationLevel?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
