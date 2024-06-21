import { Measurement } from "../measurement/Measurement";
import { JsonValue } from "type-fest";

export type User = {
  age: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  measurements?: Array<Measurement>;
  name: string | null;
  roles: JsonValue;
  sex?: "Option1" | null;
  updatedAt: Date;
  username: string;
};
