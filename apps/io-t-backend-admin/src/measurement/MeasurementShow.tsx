import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MeasurementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
