import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  isPrimume: boolean | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
