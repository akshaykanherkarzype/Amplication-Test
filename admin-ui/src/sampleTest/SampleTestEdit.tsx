import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SampleTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="guestName" source="guestName" />
      </SimpleForm>
    </Edit>
  );
};
