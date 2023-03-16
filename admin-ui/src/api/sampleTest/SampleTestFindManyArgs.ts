import { SampleTestWhereInput } from "./SampleTestWhereInput";
import { SampleTestOrderByInput } from "./SampleTestOrderByInput";

export type SampleTestFindManyArgs = {
  where?: SampleTestWhereInput;
  orderBy?: Array<SampleTestOrderByInput>;
  skip?: number;
  take?: number;
};
