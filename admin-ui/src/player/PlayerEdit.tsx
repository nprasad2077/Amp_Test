import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Games" multiline source="games" />
        <NumberInput step={1} label="Ident" source="ident" />
        <TextInput label="Sport" source="sport" />
      </SimpleForm>
    </Edit>
  );
};
