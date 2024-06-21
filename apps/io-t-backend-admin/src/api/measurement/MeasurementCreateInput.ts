import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeasurementCreateInput = {
  averageBloodGlucoseLevel?: number | null;
  averageHeartRate?: number | null;
  averageOxygenSaturationLevel?: number | null;
  bloodGlucoseLevel?: number | null;
  heartRate?: number | null;
  oxygenSaturationLevel?: number | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
