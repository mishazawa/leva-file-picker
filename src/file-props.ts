import { Data } from "leva/src/types";

export const normalize = (
  input: { onChange: (f: any) => void, accept?: string },
  path: string,
  data: Data
) => {
  return {
    value: input,
    settings: { accept: input?.accept }
  };
};
