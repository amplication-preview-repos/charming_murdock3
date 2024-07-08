import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  agentId?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
};
