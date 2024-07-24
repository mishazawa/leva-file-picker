import { Accept } from "react-dropzone";

export const normalize = (
  input: { onChange: (f: any) => void, accept?: Accept },
) => {
  return {
    value: input,
    settings: { accept: input.accept }
  };
};
