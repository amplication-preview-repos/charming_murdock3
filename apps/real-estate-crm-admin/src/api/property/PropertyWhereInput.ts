import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
};
