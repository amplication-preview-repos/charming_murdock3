import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
  clientId?: SortOrder;
};
