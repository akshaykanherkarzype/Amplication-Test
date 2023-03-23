import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestOneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Create>
  );
};
