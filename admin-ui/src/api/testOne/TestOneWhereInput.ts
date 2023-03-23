import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TestOneWhereInput = {
  id?: StringFilter;
  userName?: StringNullableFilter;
};
