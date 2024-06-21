import { SortOrder } from "../../util/SortOrder";

export type MeasurementOrderByInput = {
  averageBloodGlucoseLevel?: SortOrder;
  averageHeartRate?: SortOrder;
  averageOxygenSaturationLevel?: SortOrder;
  bloodGlucoseLevel?: SortOrder;
  createdAt?: SortOrder;
  heartRate?: SortOrder;
  id?: SortOrder;
  oxygenSaturationLevel?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
