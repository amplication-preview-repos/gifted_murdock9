import { User } from "../user/User";

export type Measurement = {
  averageBloodGlucoseLevel: number | null;
  averageHeartRate: number | null;
  averageOxygenSaturationLevel: number | null;
  bloodGlucoseLevel: number | null;
  createdAt: Date;
  heartRate: number | null;
  id: string;
  oxygenSaturationLevel: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
