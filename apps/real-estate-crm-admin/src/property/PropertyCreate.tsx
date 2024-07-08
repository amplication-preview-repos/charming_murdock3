import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Size" source="size" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentAssignmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
