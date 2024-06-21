import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="name" source="name" />
        <TextField label="Roles" source="roles" />
        <TextField label="sex" source="sex" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Measurement"
          target="userId"
          label="Measurements"
        >
          <Datagrid rowClick="show">
            <TextField
              label="averageBloodGlucoseLevel"
              source="averageBloodGlucoseLevel"
            />
            <TextField label="averageHeartRate" source="averageHeartRate" />
            <TextField
              label="averageOxygenSaturationLevel"
              source="averageOxygenSaturationLevel"
            />
            <TextField label="bloodGlucoseLevel" source="bloodGlucoseLevel" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="heartRate" source="heartRate" />
            <TextField label="ID" source="id" />
            <TextField
              label="oxygenSaturationLevel"
              source="oxygenSaturationLevel"
            />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
