import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
