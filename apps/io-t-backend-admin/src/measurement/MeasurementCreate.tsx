import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MeasurementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="averageBloodGlucoseLevel"
          source="averageBloodGlucoseLevel"
        />
        <NumberInput
          step={1}
          label="averageHeartRate"
          source="averageHeartRate"
        />
        <NumberInput
          label="averageOxygenSaturationLevel"
          source="averageOxygenSaturationLevel"
        />
        <NumberInput label="bloodGlucoseLevel" source="bloodGlucoseLevel" />
        <NumberInput step={1} label="heartRate" source="heartRate" />
        <NumberInput
          label="oxygenSaturationLevel"
          source="oxygenSaturationLevel"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
