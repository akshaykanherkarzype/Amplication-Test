import { TestOneWhereInput } from "./TestOneWhereInput";
import { TestOneOrderByInput } from "./TestOneOrderByInput";

export type TestOneFindManyArgs = {
  where?: TestOneWhereInput;
  orderBy?: Array<TestOneOrderByInput>;
  skip?: number;
  take?: number;
};
