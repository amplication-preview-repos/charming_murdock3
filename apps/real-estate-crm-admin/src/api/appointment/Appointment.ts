import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  notes: string | null;
  property?: Property | null;
  client?: Client | null;
};
