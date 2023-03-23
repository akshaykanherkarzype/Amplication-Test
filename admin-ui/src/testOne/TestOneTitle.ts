import { TestOne as TTestOne } from "../api/testOne/TestOne";

export const TESTONE_TITLE_FIELD = "userName";

export const TestOneTitle = (record: TTestOne): string => {
  return record.userName || String(record.id);
};
