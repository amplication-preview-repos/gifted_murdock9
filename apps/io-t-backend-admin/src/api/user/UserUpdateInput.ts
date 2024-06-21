import { MeasurementUpdateManyWithoutUsersInput } from "./MeasurementUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  age?: number | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  measurements?: MeasurementUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sex?: "Option1" | null;
  username?: string;
};
