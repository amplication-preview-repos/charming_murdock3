import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentId?: string | null;
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
