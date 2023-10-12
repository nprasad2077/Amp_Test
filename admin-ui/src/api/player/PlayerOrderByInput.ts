import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  games?: SortOrder;
  id?: SortOrder;
  ident?: SortOrder;
  sport?: SortOrder;
  updatedAt?: SortOrder;
};
