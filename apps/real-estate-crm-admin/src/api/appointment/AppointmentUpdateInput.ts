import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  dateTime?: Date | null;
  notes?: string | null;
  property?: PropertyWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
};
