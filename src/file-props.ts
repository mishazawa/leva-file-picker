import { Accept } from "react-dropzone";

export const normalize = (
  input: { onChange: (f: any) => void, accept?: Accept },
) => {
  return {
    value: input.onChange,
    settings: { accept: input?.accept }
  };
};
