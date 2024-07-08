import { AgentAssignmentCreateNestedManyWithoutClientsInput } from "./AgentAssignmentCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
