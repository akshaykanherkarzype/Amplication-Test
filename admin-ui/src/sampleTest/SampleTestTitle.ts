import { SampleTest as TSampleTest } from "../api/sampleTest/SampleTest";

export const SAMPLETEST_TITLE_FIELD = "guestName";

export const SampleTestTitle = (record: TSampleTest): string => {
  return record.guestName || String(record.id);
};
