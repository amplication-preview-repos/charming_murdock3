import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  address?: StringNullableFilter;
  size?: IntNullableFilter;
  appointments?: AppointmentListRelationFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
};
