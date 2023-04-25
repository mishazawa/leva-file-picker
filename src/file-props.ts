import { Data } from "leva/src/types";

export const normalize = (
  input: { onChange: (f: any) => void },
  path: string,
  data: Data
) => {
  return {
    value: input,
  };
};
