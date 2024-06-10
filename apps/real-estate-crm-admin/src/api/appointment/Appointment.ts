import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  notes: string | null;
  property?: Property | null;
  updatedAt: Date;
};
