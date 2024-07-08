import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  description: string | null;
  address: string | null;
  size: number | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
};
