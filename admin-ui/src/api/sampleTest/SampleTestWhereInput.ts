import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SampleTestWhereInput = {
  guestName?: StringNullableFilter;
  id?: StringFilter;
};
