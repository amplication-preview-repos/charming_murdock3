import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agentId: string | null;
  client?: Client | null;
  property?: Property | null;
};
