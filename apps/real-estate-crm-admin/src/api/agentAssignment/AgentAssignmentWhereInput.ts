import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  agentId?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
};
