import { MeasurementCreateNestedManyWithoutUsersInput } from "./MeasurementCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  age?: number | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  measurements?: MeasurementCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  sex?: "Option1" | null;
  username: string;
};
