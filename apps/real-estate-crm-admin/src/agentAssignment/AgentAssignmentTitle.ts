import { AgentAssignment as TAgentAssignment } from "../api/agentAssignment/AgentAssignment";

export const AGENTASSIGNMENT_TITLE_FIELD = "agentId";

export const AgentAssignmentTitle = (record: TAgentAssignment): string => {
  return record.agentId?.toString() || String(record.id);
};
