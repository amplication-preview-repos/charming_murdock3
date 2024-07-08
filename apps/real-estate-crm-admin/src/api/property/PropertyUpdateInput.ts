import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  price?: number | null;
  description?: string | null;
  address?: string | null;
  size?: number | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};
