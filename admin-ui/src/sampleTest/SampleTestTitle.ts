import { SampleTest as TSampleTest } from "../api/sampleTest/SampleTest";

export const SAMPLETEST_TITLE_FIELD = "id";

export const SampleTestTitle = (record: TSampleTest): string => {
  return record.id || String(record.id);
};
