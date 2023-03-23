import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestOneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
