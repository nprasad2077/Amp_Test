import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type PlayerWhereInput = {
  city?: StringNullableFilter;
  games?: StringNullableFilter;
  id?: StringFilter;
  ident?: IntFilter;
  sport?: StringNullableFilter;
};
