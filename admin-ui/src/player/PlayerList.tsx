import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlayerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Players"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Games" source="games" />
        <TextField label="ID" source="id" />
        <TextField label="Ident" source="ident" />
        <TextField label="Sport" source="sport" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
