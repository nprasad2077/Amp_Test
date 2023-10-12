import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PlayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Games" source="games" />
        <TextField label="ID" source="id" />
        <TextField label="Ident" source="ident" />
        <TextField label="Sport" source="sport" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
