import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  price?: number | null;
  description?: string | null;
  address?: string | null;
  size?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};
