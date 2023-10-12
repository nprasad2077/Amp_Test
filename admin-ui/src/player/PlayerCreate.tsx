import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Games" multiline source="games" />
        <NumberInput step={1} label="Ident" source="ident" />
        <TextInput label="Sport" source="sport" />
      </SimpleForm>
    </Create>
  );
};
