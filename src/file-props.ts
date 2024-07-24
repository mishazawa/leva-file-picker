import { Data } from "leva/src/types";
import { Accept } from "react-dropzone";

export const normalize = (
  input: { onChange: (f: any) => void, accept?: Accept },
  _path: string,
  _data: Data
) => {
  return {
    value: input,
    settings: { accept: input.accept }
  };
};
