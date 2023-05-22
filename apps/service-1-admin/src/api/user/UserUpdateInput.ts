import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  isPrimume?: boolean | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
